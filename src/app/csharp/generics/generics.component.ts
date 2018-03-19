import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-generics',
  templateUrl: './generics.component.html',
  styleUrls: ['./generics.component.css']
})
export class GenericsComponent implements OnInit {
  rows: string[] = [];
  rowsBackUp: string[] = [];
  search: string;
  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {
    this._httpClient.get('./assets/data-source/generics.txt', { responseType: 'text' }).subscribe(v => {
      var arr = v.split('\n');
      this.rows = arr.filter(v => v.trim().length > 0);
      this.rowsBackUp = this.rows.map(x => x);//Clone
    });
    // this._httpClient.get('./assets/data-source/generics.xml', {responseType:'text'}).subscribe(v => {
    //   var XML = new DOMParser().parseFromString(v, "text/xml");
    //   console.log(v);
    //   console.log(XML);
    // });
  }

  handleSearch(evnt) {
    if (this.search.trim().length > 0) {
      this.rows = this.rowsBackUp.filter(v => v.toLowerCase().indexOf(this.search.toLowerCase()) >= 0);
    } else {
      this.rows = this.rowsBackUp.map(x => x);
    }
  }

}
