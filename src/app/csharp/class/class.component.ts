import { Component, OnInit } from '@angular/core';
import { KeyValuePair } from '../../models/key-value-pair';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  name: string = "Employee";
  types: string[] = ["string", "int", "long", "double", "decimal", "bool"];
  typeSpaceProperty: string = "int Eno\nstring Ename";
  typeSpaceMethod: string = "Employee GetEmployee\nvoid ShowEmployee";
  members: MemberViewModel[] = [];
  csharpClass: string;
  typeScriptClass: string;
  hasManualEntry: boolean = false;
  toggleManualEntryText = "Show Manual Entry";

  constructor() { }

  ngOnInit() {
    this.types = this.types.sort();
    var vm = new MemberViewModel("string", "Ename\nAddress\nQualification");
    this.members.push(vm);
  }

  addClassMember() {
    if (this.members.length == this.types.length) return;
    var selectedType = "string";
    if (this.members.length > 0) {
      var selectedPropertyTypes = this.members.map(v => v.selectedType);
      var unselectedPropertyTypes = this.types.filter(v => selectedPropertyTypes.indexOf(v) < 0);
      if (unselectedPropertyTypes && unselectedPropertyTypes.length > 0) {
        selectedType = unselectedPropertyTypes[0];
      }
    }
    var vm = new MemberViewModel(selectedType);
    this.members.push(vm);
  }

  deleteAllClassMembers() {
    this.members = [];
  }

  deleteClassMember(index: number) {
    this.members.splice(index, 1);
  }

  generate() {
    this.generateCSharpClass();
    this.generateTypeScriptClass();
  }

  generateCSharpClass() {
    var res = `public class ${this.name}\n{\n`;
    var arr = [...this.getTypeSpaceProperties(), ...this.getDynamicMemberProperties()];
    arr.forEach(v => {
      v.key = v.key.trim();
      v.value = v.value.trim();
    });

    res += arr.map(v => `public ${v.key} ${v.value} { get; set; }`).join('\n');
    res += "\n";
    arr = this.getTypeSpaceMethods();
    res += arr.map(v => {
      if (v.key.trim() == "void") {
        return `public ${v.key} ${v.value}()\n{ \n}`;
      }
      else {
        return `public ${v.key} ${v.value}()\n{ \nvar returnVal = new ${v.key}();\n return returnVal;\n}`;
      }
    }).join('\n');
    res += "\n}"

    this.csharpClass = res;
  }

  generateTypeScriptClass() {
    var res = `export class ${this.name}{\n`;
    var arr = [...this.getTypeSpaceProperties(), ...this.getDynamicMemberProperties()];
    var numberDataTypes = ["int", "long", "decimal", "double"];
    arr.forEach(v => {
      v.key = v.key.trim();
      v.value = v.value.trim();
      if (numberDataTypes.indexOf(v.key) >= 0) {
        v.key = "number"
      } else if (v.key == 'bool') { v.key = "boolean"; }
    });

    res += arr.map(v => `${v.value}: ${v.key};`).join('\n');
    res += "\n";
    arr = this.getTypeSpaceMethods();
    res += arr.map(v => {
      if (v.key.trim() == "void") {
        return `${v.value}(): ${v.key}{ \n}`;
      }
      else {
        return `${v.value}(): ${v.key}{ \nvar returnVal = new ${v.key}();\n return returnVal;\n}`;
      }
    }).join('\n');
    res += "\n}"

    this.typeScriptClass = res;
  }

  getTypeSpaceProperties(): KeyValuePair[] {
    var returnVal = [];
    if (this.hasManualEntry) {
      if (this.typeSpaceProperty && this.typeSpaceProperty.trim().length > 0) {
        var arrProps = this.typeSpaceProperty.split('\n');
        if (arrProps && arrProps.length > 0) {
          arrProps.forEach(v => {
            var arr = v.split(' ');
            if (arr && arr.length == 2) {
              returnVal.push(new KeyValuePair(arr[0], arr[1]));
            }
          });
        }
      }
    }
    return returnVal;
  }

  getTypeSpaceMethods(): KeyValuePair[] {
    var returnVal = [];
    if (this.hasManualEntry) {
      if (this.typeSpaceMethod && this.typeSpaceMethod.trim().length > 0) {
        var arrMethods = this.typeSpaceMethod.split('\n');
        if (arrMethods && arrMethods.length > 0) {
          arrMethods.forEach(v => {
            var arr = v.split(' ');
            if (arr && arr.length == 2) {
              returnVal.push(new KeyValuePair(arr[0], arr[1]));
            }
          });
        }
      }
    }
    return returnVal;
  }

  getDynamicMemberProperties(): KeyValuePair[] {
    var returnVal = [];
    this.members.forEach(v => {
      if (v.properties && v.properties.trim().length > 0) {
        var arrProps = v.properties.split('\n');
        if (arrProps && arrProps.length > 0) {
          arrProps.forEach(p => {
            returnVal.push(new KeyValuePair(v.selectedType, p));
          })
        }
      }
    });
    return returnVal;
  }

  showMaualEntry() {
    this.hasManualEntry = !this.hasManualEntry;
    if (this.hasManualEntry) this.toggleManualEntryText = "Hide Manual Entry";
    else this.toggleManualEntryText = "Show Manual Entry";
  }
}


class MemberViewModel {
  selectedType: string;
  properties: string;
  constructor(selectedType: string, properties?: string) {
    this.selectedType = selectedType;
    this.properties = properties;
  }
}