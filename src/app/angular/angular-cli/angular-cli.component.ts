import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-angular-cli',
  templateUrl: './angular-cli.component.html',
  styleUrls: ['./angular-cli.component.css']
})
export class AngularCliComponent implements OnInit {

  rows: string[] = [];
  rowsBackUp: string[] = [];
  search: string;
  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {
    this._httpClient.get('./assets/data-source/angular-cli.txt', { responseType: 'text' }).subscribe(v => {
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
