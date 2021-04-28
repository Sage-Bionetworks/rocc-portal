import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FooterModule } from '@sage-bionetworks/sage-angular';
import { OrganizationsComponent } from './organizations.component';

const routes: Routes = [
  { path: '', component: OrganizationsComponent }
];

@NgModule({
  declarations: [OrganizationsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FooterModule
  ],
  exports: [OrganizationsComponent]
})
export class OrganizationsModule {}
