import { InjectionToken, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { GithubButtonModule } from '@sage-bionetworks/sage-angular';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
// import { SageGithubButtonComponent } from './component/sage-github-button/sage-github-button.component';

export function apiConfigFactory(): Configuration {
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
    ChallengeDetailComponent,
    // SageGithubButtonComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule,
    GithubButtonModule,
    ApiModule.forRoot(apiConfigFactory),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: BASE_PATH, useValue: environment.apiBasePath }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
