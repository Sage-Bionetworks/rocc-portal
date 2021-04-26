import { Component } from '@angular/core';

// TODO: fix import from @sage-bionetworks/sage-angular
import { Section } from '@sage-bionetworks/sage-angular/src/lib/navbar/section';
import { SECTIONS } from './app-sections';
import { environment } from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ROCC';
  version = environment.appVersion;
  sections: { [key: string]: Section } = SECTIONS;

  constructor() {}

  ngOnInit(): void {}
}
