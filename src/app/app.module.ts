import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation/navigation-bar/navigation-bar.component';
import { FooterBarComponent } from './navigation/footer-bar/footer-bar.component';
import { AcceuilComponent } from './website/acceuil/acceuil.component';
import { NotFoundComponent } from './website/not-found/not-found.component';
import { LoginComponent } from './website/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterBarComponent,
    AcceuilComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
