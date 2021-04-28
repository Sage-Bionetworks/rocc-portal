import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FooterModule } from '@sage-bionetworks/sage-angular';
import { SigninComponent } from './signin.component';

const routes: Routes = [
  { path: '', component: SigninComponent }
];

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FooterModule
  ],
  exports: [SigninComponent]
})
export class SigninModule {}
