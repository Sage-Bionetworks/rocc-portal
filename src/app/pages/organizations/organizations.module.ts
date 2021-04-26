import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationsComponent } from './organizations.component';

@NgModule({
  declarations: [OrganizationsComponent],
  imports: [CommonModule],
  exports: [OrganizationsComponent]
})
export class OrganizationsModule {}
