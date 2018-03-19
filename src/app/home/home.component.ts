import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { KeyValuePair } from '../models/key-value-pair';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  subMenuItems: KeyValuePair[];
  selectedSubMenuItem: string;
  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.subMenuItems = Object.keys(SubMenuItems).map(key => new KeyValuePair(key, SubMenuItems[key]));
    this.setActiveSubMenu();
  }

  subMenuClick(value: string) {
    this.selectedSubMenuItem = value;
    switch (value) {
      case SubMenuItems.Index0:
        this._router.navigate(["home/index0"]);
        break;
      case SubMenuItems.Index1:
        this._router.navigate(["home/index1"]);
        break;
      case SubMenuItems.Index2:
        this._router.navigate(["home/index2"]);
        break;
      case SubMenuItems.Json:
        this._router.navigate(["home/json"]);
        break;
      case SubMenuItems.JsonArray:
        this._router.navigate(["home/jsonarray"]);
        break;
    }
  }
  setActiveSubMenu() {
    var path = window.location.pathname;
    switch (path) {
      case "/home":
        this.selectedSubMenuItem = undefined;
        break;
      case "/home/index0":
        this.selectedSubMenuItem = SubMenuItems.Index0;
        break;
      case "/home/index1":
        this.selectedSubMenuItem = SubMenuItems.Index1;
        break;
      case "/home/index2":
        this.selectedSubMenuItem = SubMenuItems.Index2;
        break;
      case "/home/json":
        this.selectedSubMenuItem = SubMenuItems.Json;
        break;
      case "/home/jsonarray":
        this.selectedSubMenuItem = SubMenuItems.JsonArray;
        break;
    }
  }
}
enum SubMenuItems {
  Index0 = "Index 0",
  Index1 = "Index 1",
  Index2 = "Index 2",
  Json = "JSON",
  JsonArray = "JSON Array",
}
