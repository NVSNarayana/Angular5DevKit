import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-array',
  templateUrl: './json-array.component.html',
  styleUrls: ['./json-array.component.css']
})
export class JsonArrayComponent implements OnInit {
  jsonKeys: string = 'Eno\nEname\nAge\nQualification\nSalary\nAddress\nContact';
  randomKeys: string = 'Age:20to60\nQualification:["SSLC","PUC","Graduate","Post Graduate"]';
  incrementKeys: string = "Eno:1000\nSalary:50000";
  incrementSuffixKeys: string = "Ename:E\nAddress:Blr";
  arraySize: number = 10;
  response: string;
  constructor() { }

  ngOnInit() {
  }

  generate() {
    if (this.arraySize && this.jsonKeys && this.jsonKeys.trim().length > 0) {
      var keys = this.jsonKeys.split('\n');
      var arr = [];
      for (var i = 0; i < this.arraySize; i++) {
        var jsonObj = {};
        keys.forEach(key => {
          this.setRandomKeys(key, jsonObj);
          this.setIncrementalKeys(key, i, jsonObj);
          this.setIncrementSuffixKeys(key, i, jsonObj);
          if (!Object.keys(jsonObj).find(v => v == key)) {
            jsonObj[key] = "";
          }
        });
        arr.push(jsonObj);
      }
      this.response = JSON.stringify(arr);
    }
  }

  setRandomKeys(key: string, jsonObj: any) {
    var randomKeys = this.getRandomKeys();
    var findRandomKey = randomKeys.find(v => v.key == key);
    if (findRandomKey) {
      if (findRandomKey.isValuesFromArray) {
        jsonObj[key] = this.getRandomValueFromArray(findRandomKey.arrayValues);
      }
      else if (findRandomKey.isValuesFromRange) {
        jsonObj[key] = this.getRndNumber(findRandomKey.valueFrom, findRandomKey.valueTo);
      }
    }
  }

  setIncrementalKeys(key: string, increment: number, jsonObj: any) {
    var incrementKeys = this.getIncrementKeys();
    var findIncrementalKey = incrementKeys.find(v => v.key == key);
    if (findIncrementalKey) {
      jsonObj[key] = findIncrementalKey.valueFrom + increment;
    }
  }
  setIncrementSuffixKeys(key: string, increment: number, jsonObj: any) {
    var incrementSuffixKeys = this.getIncrementSuffixKeys();

    var findIncrementSuffixKey = incrementSuffixKeys.find(v => v.key == key);
    if (findIncrementSuffixKey) {
      jsonObj[key] = findIncrementSuffixKey.valuePrefix + increment;
    }
  }

  getRndNumber(min, max): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomValueFromArray(arr: any[]) {
    var randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber];
  }

  getRandomKeys(): RandomKeyModel[] {
    var randKeyModels = [];
    if (this.randomKeys && this.randomKeys.trim().length > 0) {
      var arrRandomKeys = this.randomKeys.split('\n');
      arrRandomKeys.forEach(item => {
        var model = new RandomKeyModel();
        var arrKeyVal = item.split(":");
        model.key = arrKeyVal[0];
        if (arrKeyVal[1].startsWith("[")) {
          model.isValuesFromArray = true;
          model.arrayValues = JSON.parse(arrKeyVal[1]);
        } else {
          model.isValuesFromRange = true;
          var arrFromTo = arrKeyVal[1].split("to");
          model.valueFrom = +arrFromTo[0];
          model.valueTo = +arrFromTo[1];
        }
        randKeyModels.push(model);
      });
    }
    return randKeyModels;
  }

  getIncrementKeys(): IncrementKeyModel[] {
    var incrementModels = [];
    if (this.incrementKeys && this.incrementKeys.trim().length > 0) {
      var arr = this.incrementKeys.split('\n');
      arr.forEach(v => {
        var model = new IncrementKeyModel();
        var arrKeyVal = v.split(":");
        model.key = arrKeyVal[0];
        model.valueFrom = +arrKeyVal[1];
        incrementModels.push(model);
      })
    }
    return incrementModels;
  }

  getIncrementSuffixKeys(): IncrementSuffixKeyModel[] {
    var incrementSuffixModels = [];
    if (this.incrementSuffixKeys && this.incrementSuffixKeys.trim().length > 0) {
      var arr = this.incrementSuffixKeys.split('\n');
      arr.forEach(v => {
        var model = new IncrementSuffixKeyModel();
        if (v.indexOf(":") > 0) {
          var arrKeyVal = v.split(":");
          model.key = arrKeyVal[0];
          model.valuePrefix = arrKeyVal[1];
        }
        else {
          model.key = model.valuePrefix = v;
        }
        incrementSuffixModels.push(model);

      })
    }
    return incrementSuffixModels;
  }
}

class RandomKeyModel {
  key: string;
  isValuesFromArray: boolean;
  isValuesFromRange: boolean;
  arrayValues: any = [];
  valueFrom: number;
  valueTo: number;
}

class IncrementKeyModel {
  key: string;
  valueFrom: number;
}

class IncrementSuffixKeyModel {
  key: string;
  valuePrefix: string;
}