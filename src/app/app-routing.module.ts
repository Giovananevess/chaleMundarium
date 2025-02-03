import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsChaleComponent } from './pages/details-chale/details-chale.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DatailsChaleCanadenseComponent } from './pages/datails-chale-canadense/datails-chale-canadense.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'details-chale', component: DetailsChaleComponent
  },
  {
    path: 'details-chale-canadense', component: DatailsChaleCanadenseComponent
  },
  {
    path: 'aboutUs', component: AboutUsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
