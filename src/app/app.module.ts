import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutMeComponent,
    ContactComponent,
    DisclaimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
