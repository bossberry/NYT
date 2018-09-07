import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
    { path:  '', redirectTo:  'HomePage', pathMatch:  'full' },
    {
        path:  'HomePage',
        component:  HomePageComponent
    },{
        path:  'ArticleDetail',
        component:  DetailComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }