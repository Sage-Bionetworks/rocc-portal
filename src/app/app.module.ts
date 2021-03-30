import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChallengesComponent } from './component/challenges/challenges.component';
import { OrganizationsComponent } from './component/organizations/organizations.component';
import { ExploreComponent } from './component/explore/explore.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ChallengeDetailComponent } from './component/challenge-detail/challenge-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ChallengesComponent,
    OrganizationsComponent,
    ExploreComponent,
    HomeComponent,
    AboutComponent,
    ChallengeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
