import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index0',
  templateUrl: './index0.component.html',
  styleUrls: ['./index0.component.css']
})
export class Index0Component implements OnInit {
  format: string = "public string {0} {get;set;}";
  input: string = "Ename\nAddress\nQualification";
  response: string = "";
  constructor() { }

  ngOnInit() {
  }
  
  generate() {
    if (this.input && this.input.trim().length > 0) {
      var arr = this.input.trim().split("\n");
      this.response = "";
      arr.forEach(v => {
        if (v && v.trim().length > 0) {
          this.response += this.format.replace("{0}", v) + "\n";
        }
      })
    }

  }
}
