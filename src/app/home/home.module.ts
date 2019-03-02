import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { MaterialModules } from './../shared/material/material-barrel.module';
import { HomeLeftNavComponent } from './navigation/nav.component';
import { HomeFeedComponent } from './event-feed/feed.component';
import { HomeUpcomingComponent } from './upcoming/upcoming.component';
import { FeedEventModule } from '../shared/event/event.module';

@NgModule({
  declarations: [
    HomeComponent,
    HomeLeftNavComponent,
    HomeFeedComponent,
    HomeUpcomingComponent,
  ],

  imports: [
    MaterialModules,
    FeedEventModule
  ],
  
  exports: [

  ],
  
  providers: [],
})
export class HomeModule { }
