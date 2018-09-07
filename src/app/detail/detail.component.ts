import { Component, OnInit } from '@angular/core';
import { APIService } from  '../api.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private  news:Array<object> = [];
  constructor(private _location: Location, private  apiService:  APIService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.getNews();
      var encoded = encodeURIComponent(this.route.params._value.param);

  }
  public  getNews(){
    this.apiService.getNews(encodeURIComponent(this.route.params._value.param)).subscribe((data:  Array<object>) => {
        this.news  =  data.response;
    });
  }
  goBack(): void {
    this._location.back();
  }
}
