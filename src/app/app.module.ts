import { InjectionToken, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { ApiModule, Configuration, ConfigurationParameters } from '@sage-bionetworks/rocc-client-angular';
import { BASE_PATH } from '@sage-bionetworks/rocc-client-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChallengesComponent } from './component/challenges/challenges.component';
import { OrganizationsComponent } from './component/organizations/organizations.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ChallengeDetailComponent } from './component/challenge-detail/challenge-detail.component';

import { environment } from '../environments/environment';

export function apiConfigFactory (): Configuration {
  const params: ConfigurationParameters = {
    // set configuration parameters here.
  }
  return new Configuration(params);
}

@NgModule({
  declarations: [
    AppComponent,
    ChallengesComponent,
    OrganizationsComponent,
    HomeComponent,
    AboutComponent,
    ChallengeDetailComponent
  ],
  imports: [
    BrowserModule,
    ApiModule.forRoot(apiConfigFactory),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: BASE_PATH, useValue: environment.apiBasePath }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
