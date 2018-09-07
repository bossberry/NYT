import { Component, OnInit } from '@angular/core';
import { APIService } from  '../api.service';
import { Router } from '@angular/router';
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
  constructor(private  apiService:  APIService, private router: Router) { }
  // constructor() { }
  ngOnInit() {
    this.getTopArticle();
  }
  public getTopArticle(){
    this.apiService.getTopArticle().subscribe((data:  Array<object>) => {
        this.news  =  data.results;
    });
  }
  public sort(data){
    if(data === 'old'){
      this.sortBy = 'oldest'
      this.orderBy = '-published_date'
    } else {
      this.sortBy = 'newest'
      this.orderBy = 'published_date'
    }
  }
  public goTo(data){
    this.router.navigate(['/ArticleDetail', data.url]);
  }
  public goToStore(data){
    localStorage.setItem('Article', JSON.stringify(data));
    this.router.navigate(['/ArticleDetail2']);
  }
}