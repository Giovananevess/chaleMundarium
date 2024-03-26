import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './pages/sliderhome/sliderhome.component';
import { OptionTravelComponent } from './pages/option-travel/option-travel.component';
import { FooterComponent } from './pages/footer/footer.component';
import { DetailsChaleComponent } from './pages/details-chale/details-chale.component';
import { CoffeeComponent } from './pages/coffee/coffee.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { CardComponent } from './pages/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    OptionTravelComponent,
    FooterComponent,
    DetailsChaleComponent,
    CoffeeComponent,
    NavbarComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
