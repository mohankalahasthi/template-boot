import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { BannerComponent } from './banner/banner.component';
import { CardsComponent } from './cards/cards.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { GenericsComponent } from './generics/generics.component';
import { ElementsComponent } from './elements/elements.component';

//services
import {CommonService} from './services/common/common.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    BannerComponent,
    CardsComponent,
    ProfileComponent,
    FooterComponent,
    FeedbackComponent,
    HomeComponent,
    SignupComponent,
    GenericsComponent,
    ElementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
