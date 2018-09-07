import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-det',
  templateUrl: './det.component.html',
  styleUrls: ['./det.component.css']
})
export class DetComponent implements OnInit {
  private  news:any = {};
  constructor(private _location: Location) { }

  ngOnInit() {
    this.getNews();
  }
  public  getNews(){
    this.news = JSON.parse(localStorage.getItem('Article'));
  }
  goBack(): void {
    this._location.back();
  }
}
