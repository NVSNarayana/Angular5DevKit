import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index2',
  templateUrl: './index2.component.html',
  styleUrls: ['./index2.component.css']
})
export class Index2Component implements OnInit {
  format: string = 'new EmployeeModel{Eno={0}, Ename="{1}", Age={2}},';
  input1: string = "1\n2\n3";
  input2: string = "A\nB\nC";
  input3: string = "21\n22\n23";

  response: string = "";

  constructor() { }

  ngOnInit() {
  }
  generate() {
    if (this.input1 && this.input1.trim().length > 0 && this.input2 && this.input2.trim().length > 0) {
      var arr1 = this.input1.trim().split("\n");
      var arr2 = this.input2.trim().split("\n");
      var arr3 = this.input3.trim().split("\n");
      var maxLength = Math.max(...[arr1.length, arr2.length, arr3.length]);
      this.response = "";

      if (arr1.length != maxLength) {
        arr1.push(...Array(maxLength - arr1.length).fill(""));
      }
      if (arr2.length != maxLength) {
        arr2.push(...Array(maxLength - arr2.length).fill(""));
      }
      if (arr3.length != maxLength) {
        arr3.push(...Array(maxLength - arr3.length).fill(""));
      }
      for (var i = 0; i < arr1.length; i++) {
        this.response += this.format.replace("{0}", arr1[i]).replace("{1}", arr2[i]).replace("{2}", arr3[i]) + "\n";
      }
    }

  }

}
