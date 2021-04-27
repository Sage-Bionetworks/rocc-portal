import { InjectionToken, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { NavbarModule, FooterModule } from '@sage-bionetworks/sage-angular';
import { ApiModule, Configuration, ConfigurationParameters } from '@sage-bionetworks/rocc-client-angular';
import { BASE_PATH } from '@sage-bionetworks/rocc-client-angular';

import { AppComponent } from './app.component';
import { routes } from './app-routes';
import { environment } from '../environments/environment';

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
    HttpClientModule,
    RouterModule.forRoot(routes),
    NavbarModule,
    FooterModule,
    ApiModule.forRoot(apiConfigFactory)
  ],
  providers: [
    { provide: BASE_PATH, useValue: environment.apiBasePath }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
