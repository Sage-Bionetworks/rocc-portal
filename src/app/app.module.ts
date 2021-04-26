import { InjectionToken, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { NavbarModule, FooterModule } from '@sage-bionetworks/sage-angular';
import { ApiModule, Configuration, ConfigurationParameters } from '@sage-bionetworks/rocc-client-angular';
import { BASE_PATH } from '@sage-bionetworks/rocc-client-angular';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from './pages/homepage';
import { ExploreModule } from './pages/explore';
import { OrganizationsModule } from './pages/organizations';

// import { ChallengesComponent } from './component/challenges/challenges.component';
// import { OrganizationsComponent } from './component/organizations/organizations.component';
// import { HomeComponent } from './component/home/home.component';
// import { AboutComponent } from './component/about/about.component';
// import { ChallengeDetailComponent } from './component/challenge-detail/challenge-detail.component';
import { ROUTES } from './app-routes';

import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    // set configuration parameters here.
  };
  return new Configuration(params);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    NavbarModule,
    FooterModule,
    ApiModule.forRoot(apiConfigFactory),
    HomepageModule,
    ExploreModule,
    OrganizationsModule
  ],
  providers: [
    { provide: BASE_PATH, useValue: environment.apiBasePath }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
