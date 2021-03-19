import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { OrganizationsComponent } from './organizations/organizations.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'challenges', component: ChallengesComponent },
  { path: 'organizations', component: OrganizationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
