import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  API_URL  =  'https://api.nytimes.com';
  API_KEY = "30f5a9b8143b427d9e57721a945606e7"
  // constructor() {}
  constructor(private  httpClient:  HttpClient) {}
  getNews(param){
    return  this.httpClient.get(`${this.API_URL}/svc/news/v3/content/content.json?api-key=${this.API_KEY}&url=${param}`);
    // return  this.httpClient.get(`${this.API_URL}/svc/search/v2/articlesearch.json?api-key=${this.API_KEY}&q=${param}`);
  }
  getTopArticle(){
    return  this.httpClient.get(`${this.API_URL}/svc/topstories/v2/home.json?api-key=${this.API_KEY}`);
  }
}
