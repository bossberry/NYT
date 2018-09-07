import { Component, OnInit } from '@angular/core';
import { APIService } from  '../api.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  private  news:Array<object> = [];
  public search:any = '';
  public query:string = '';
  public sortBy:string = 'newest';
  public orderBy:string = 'published_date';
  constructor(private  apiService:  APIService) { }
  // constructor() { }
  ngOnInit() {
    this.getTopArticle();
    // this.getNews();
  }
  public  getNews(){
    this.apiService.getNews().subscribe((data:  Array<object>) => {
        this.news  =  data.response.docs;
        console.log(this.news);
    });
  },
  public getTopArticle(){
    this.apiService.getTopArticle().subscribe((data:  Array<object>) => {
        this.news  =  data.results;
        console.log(this.news);
    });
  },
  public sort(data){
    if(data === 'old'){
      this.sortBy = 'oldest'
      this.orderBy = '-published_date'
    } else {
      this.sortBy = 'newest'
      this.orderBy = 'published_date'
    }
  },
  public goTo(data){
    console.log(data);
}
