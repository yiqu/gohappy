import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModules } from './shared/material/material-barrel.module';
import { NavBarModule } from './nav-bar/nav-top.module';
import { HomeModule } from './home/home.module';
import { CrudService } from './shared/service/crud.service';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModules,
    CommonModule,
    NavBarModule,
    HttpClientModule,
    HomeModule,
    AppRoutingModule
  ],

  providers: [
    CrudService,
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
