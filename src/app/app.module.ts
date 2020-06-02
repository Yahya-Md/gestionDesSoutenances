import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation/navigation-bar/navigation-bar.component';
import { FooterBarComponent } from './navigation/footer-bar/footer-bar.component';
import { AcceuilComponent } from './website/acceuil/acceuil.component';
import { NotFoundComponent } from './website/not-found/not-found.component';
import { LoginComponent } from './website/login/login.component';
import { InscriptionComponent } from './website/inscription/inscription.component';
import { DashboardComponent } from './users/dashboard/dashboard.component';
import { DashInfoComponent } from './users/dashboard/dash-info/dash-info.component';
import { DashContentComponent } from './users/dashboard/dash-content/dash-content.component';
import { DashContentNavComponent } from './users/dashboard/dash-content/dash-content-nav/dash-content-nav.component';
import { DashContentSectionComponent } from './users/dashboard/dash-content/dash-content-section/dash-content-section.component';
import { DashContentSectionBtnComponent } from './users/dashboard/dash-content/dash-content-section/dash-content-section-btn/dash-content-section-btn.component';
import { DashContentSectionArticleComponent } from './users/dashboard/dash-content/dash-content-section/dash-content-section-article/dash-content-section-article.component';
import { DashContentSectionArticleFormComponent } from './users/dashboard/dash-content/dash-content-section/dash-content-section-article/dash-content-section-article-form/dash-content-section-article-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterBarComponent,
    AcceuilComponent,
    NotFoundComponent,
    LoginComponent,
    InscriptionComponent,
    DashboardComponent,
    DashInfoComponent,
    DashContentComponent,
    DashContentNavComponent,
    DashContentSectionComponent,
    DashContentSectionBtnComponent,
    DashContentSectionArticleComponent,
    DashContentSectionArticleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
