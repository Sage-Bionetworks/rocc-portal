import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ExploreComponent } from './component/explore/explore.component';
import { ChallengesComponent } from './component/challenges/challenges.component';
import { OrganizationsComponent } from './component/organizations/organizations.component';

const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'challenges', component: ChallengesComponent },
  { path: 'organizations', component: OrganizationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
