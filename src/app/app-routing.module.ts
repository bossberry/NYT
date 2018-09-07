import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { DetailComponent } from './detail/detail.component';
import { DetComponent } from './det/det.component';

const routes: Routes = [
    { path:  '', redirectTo:  'HomePage', pathMatch:  'full' },
    {
        path:  'HomePage',
        component:  HomePageComponent
    },{
        path:  'ArticleDetail/:param',
        component:  DetailComponent
    },{
        path:  'ArticleDetail2',
        component:  DetComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }