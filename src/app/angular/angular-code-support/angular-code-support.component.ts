import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-angular-code-support',
  templateUrl: './angular-code-support.component.html',
  styleUrls: ['./angular-code-support.component.css']
})
export class AngularCodeSupportComponent implements OnInit {

  rows: string[] = [];
  rowsBackUp: string[] = [];
  search: string;
  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {
    this._httpClient.get('./assets/data-source/angular-code-support.txt', { responseType: 'text' }).subscribe(v => {
      var arr = v.split('\n');
      this.rows = arr.filter(v => v.trim().length > 0);
      this.rowsBackUp = this.rows.map(x => x);//Clone
    });
  }

  handleSearch(evnt) {
    if (this.search.trim().length > 0) {
      this.rows = this.rowsBackUp.filter(v => v.toLowerCase().indexOf(this.search.toLowerCase()) >= 0);
    } else {
      this.rows = this.rowsBackUp.map(x => x);
    }
  }

}
