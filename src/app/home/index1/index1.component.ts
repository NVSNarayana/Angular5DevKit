import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-index1',
  templateUrl: './index1.component.html',
  styleUrls: ['./index1.component.css']
})
export class Index1Component implements OnInit {
  format: string = '{{0}, "{1}"},';
  input1: string = "1\n2\n3";
  input2: string = "Country\nState\nDistrict";
  response: string = "";
  constructor() { }

  ngOnInit() {
  }

  generate() {
    if (this.input1 && this.input1.trim().length > 0 && this.input2 && this.input2.trim().length > 0) {
      var arr1 = this.input1.trim().split("\n");
      var arr2 = this.input2.trim().split("\n");
      this.response = "";
      if (arr1.length > arr2.length) {
        arr2.push(...Array(arr1.length - arr2.length).fill(""))
      }
      else if (arr2.length > arr1.length) {
        arr1.push(...Array(arr2.length - arr1.length).fill(""))
      }
      for (var i = 0; i < arr1.length; i++) {
        this.response += this.format.replace("{0}", arr1[i]).replace("{1}", arr2[i]) + "\n";
      }
    }

  }

}
