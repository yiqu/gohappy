import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { MaterialModules } from './../shared/material/material-barrel.module';
import { HomeLeftNavComponent } from './navigation/nav.component';
import { HomeFeedComponent } from './event-feed/feed.component';
import { HomeUpcomingComponent } from './upcoming/upcoming.component';
import { FeedEventModule } from '../shared/event/event.module';
import { DataService } from '../shared/service/data.service';
import { LoadingModule } from './../loading/loading.module';

@NgModule({
  declarations: [
    HomeComponent,
    HomeLeftNavComponent,
    HomeFeedComponent,
    HomeUpcomingComponent,
  ],

  imports: [
    CommonModule,
    LoadingModule,
    MaterialModules,
    FeedEventModule
  ],
  
  exports: [

  ],
  
  providers: [
    DataService
  ],
})
export class HomeModule { }
