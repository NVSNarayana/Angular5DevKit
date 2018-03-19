import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-csharp-new-features',
  templateUrl: './csharp-new-features.component.html',
  styleUrls: ['./csharp-new-features.component.css']
})
export class CsharpNewFeaturesComponent implements OnInit {

  rows: string[] = [];
  rowsBackUp: string[] = [];
  search: string;
  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {
    this._httpClient.get('./assets/data-source/csharp-new-features.txt', { responseType: 'text' }).subscribe(v => {
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
