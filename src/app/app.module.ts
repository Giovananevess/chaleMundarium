import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { OptionTravelComponent } from './pages/option-travel/option-travel.component';
import { FooterComponent } from './pages/footer/footer.component';
import { DetailsChaleComponent } from './pages/details-chale/details-chale.component';
import { CoffeeComponent } from './pages/coffee/coffee.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { CardComponent } from './pages/card/card.component';
import { register } from 'swiper/element/bundle';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
register();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OptionTravelComponent,
    FooterComponent,
    DetailsChaleComponent,
    CoffeeComponent,
    NavbarComponent,
    CardComponent,
    FeedbackComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
