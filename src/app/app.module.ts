import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

import { AppRoutingModule } from  './app-routing.module';
import { HttpClientModule } from  '@angular/common/http';
import { SearchPipe } from './search.pipe';
import { SortPipe } from './sort.pipe';
import { DetailComponent } from './detail/detail.component';
import { DetComponent } from './det/det.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPipe,
    SortPipe,
    DetailComponent,
    DetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
