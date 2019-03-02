import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModules } from './shared/material/material-barrel.module';
import { NavBarModule } from './nav-bar/nav-top.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModules,
    NavBarModule,
    HomeModule,
    AppRoutingModule
  ],

  providers: [
    
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
