import { Component, OnInit } from '@angular/core';
import { KeyValuePair } from '../models/key-value-pair';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  subMenuItems: KeyValuePair[];
  selectedSubMenuItem: string;
  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.subMenuItems = Object.keys(SubMenuItems).map(key => new KeyValuePair(key, SubMenuItems[key]));
    this.setActiveSubMenu();
  }
  slide_Click(value: string) {
    this.selectedSubMenuItem = value;
    switch (value) {
      case SubMenuItems.AngularCLI:
        this._router.navigate(["angular/angularcli"]);
        break;
      case SubMenuItems.CodeSupport:
        this._router.navigate(["angular/codesupport"]);
        break;
    }
  }
  setActiveSubMenu() {
    var path = window.location.pathname;
    switch (path) {
      case "/angular":
        this.selectedSubMenuItem = undefined;
        break;
      case "/angular/angularcli":
        this.selectedSubMenuItem = SubMenuItems.AngularCLI;
        break;
      case "/angular/codesupport":
        this.selectedSubMenuItem = SubMenuItems.CodeSupport;
        break;
    }
  }
}
enum SubMenuItems {
  AngularCLI = "Angular CLI",
  CodeSupport = "Code Support",
}