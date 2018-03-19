import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {
  jsonString: string = '{"Eno":1001,"Ename":"E","Age":23}';
  keys: string;
  values: string;
  separator: string = ":";
  keySeparatorValue: string;

  constructor() { }

  ngOnInit() {
  }
  generateKeysAndValues() {
    if (this.jsonString && this.jsonString.trim().length > 0) {
      try {
        var obj = JSON.parse(this.jsonString);
        var arrKeys = Object.keys(obj)
        var arrValues = Object.values(obj);
        this.keys = arrKeys.join('\n');
        this.values = arrValues.join('\n');
        this.keySeparatorValue = Object.keys(obj).map(key => key + this.separator + obj[key]).join('\n');
      } catch (e) {

      }
    }
  }
  generateJsonString() {
    if (this.keys && this.keys.trim().length > 0 && this.values && this.values.trim().length > 0) {

      var arrKeys = this.keys.trim().split('\n');
      var arrValues = this.values.trim().split('\n');
      var obj = {};
      if (arrKeys.length > arrValues.length) {
        arrValues.push(...Array(arrKeys.length - arrValues.length).fill(""));
      }
      var strBools = ["true", "false"];
      for (var i = 0; i < arrKeys.length; i++) {
        var key = arrKeys[i];
        var value = arrValues[i];
        var isBool = strBools.find(v => v == value.toLowerCase());
        if (isBool) {
          obj[key] = Boolean(value);
        }
        else if (Number(value)) {
          obj[key] = Number(value);
        }
        else {
          obj[key] = value;
        }
      }
      this.jsonString = JSON.stringify(obj);
    }

  }
  generateJsonStringBySeparator() {
    if (this.keySeparatorValue && this.keySeparatorValue.trim().length > 0) {
      var arr = this.keySeparatorValue.trim().split('\n');
      var arrKeys = [], arrValues = [];
      arr.forEach(element => {
        var arrKeyValue = element.split(this.separator);
        arrKeys.push(arrKeyValue[0]);
        arrValues.push(arrKeyValue[1]);
      });

      this.keys = arrKeys.join('\n');
      this.values = arrValues.join('\n');
      this.generateJsonString();
    }
  }
}
