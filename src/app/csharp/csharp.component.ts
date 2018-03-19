import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { KeyValuePair } from '../models/key-value-pair';

@Component({
  selector: 'app-csharp',
  templateUrl: './csharp.component.html',
  styleUrls: ['./csharp.component.css']
})
export class CsharpComponent implements OnInit {

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
      case SubMenuItems.Class:
        this._router.navigate(["csharp/class"]);
        break;
      case SubMenuItems.Generics:
        this._router.navigate(["csharp/generics"]);
        break;
    }
  }
  setActiveSubMenu() {
    var path = window.location.pathname;
    switch (path) {
      case "/csharp":
        this.selectedSubMenuItem = undefined;
        break;
      case "/csharp/class":
        this.selectedSubMenuItem = SubMenuItems.Class;
        break;
      case "/csharp/generics":
        this.selectedSubMenuItem = SubMenuItems.Generics;
        break;
    }
  }
}
enum SubMenuItems {
  Class = "Class",
  Generics = "Generics",
}

