import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from '@sage-bionetworks/sage-angular';

import { HomepageComponent } from './homepage.component';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    FooterModule
  ],
  exports: [HomepageComponent]
})
export class HomepageModule {}
