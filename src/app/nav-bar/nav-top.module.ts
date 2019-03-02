import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { NavbarTopComponent } from './nav-top.component';
import { MaterialModules } from '../shared/material/material-barrel.module';

@NgModule({
  imports: [
    MaterialModules
  ],
  
  exports: [
    NavbarTopComponent
  ],

  declarations: [
    NavbarTopComponent
  ],

  providers: [],
})
export class NavBarModule { }
