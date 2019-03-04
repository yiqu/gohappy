import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FeedEventComponent } from './event.component';
import { MaterialModules } from './../material/material-barrel.module';

@NgModule({
  imports: [
    MaterialModules,
    FormsModule,
    CommonModule
  ],

  exports: [
    FeedEventComponent
  ],

  declarations: [
    FeedEventComponent
  ],

  providers: [],
})
export class FeedEventModule { }
