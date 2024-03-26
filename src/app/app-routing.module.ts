import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsChaleComponent } from './pages/details-chale/details-chale.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'details-chale', component: DetailsChaleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
