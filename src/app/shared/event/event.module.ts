import { NgModule } from '@angular/core';
import { FeedEventComponent } from './event.component';
import { MaterialModules } from './../material/material-barrel.module';

@NgModule({
  imports: [
    MaterialModules
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
