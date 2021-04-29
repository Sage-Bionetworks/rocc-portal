import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import {
  ChallengeService,
  OrganizationService,
  PersonService,
  TagService
} from '@sage-bionetworks/rocc-client-angular';

@Component({
  selector: 'rocc-database-seed',
  templateUrl: './database-seed.component.html',
  styleUrls: ['./database-seed.component.scss']
})
export class DatabaseSeedComponent implements OnInit {

  constructor(private challengeService: ChallengeService,
    private organizationService: OrganizationService,
    private personService: PersonService,
    private tagService: TagService) {}

  ngOnInit(): void {
    const removeAllDocuments$ = forkJoin([
      this.challengeService.deleteAllChallenges(),
      this.organizationService.deleteAllOrganizations(),
      this.personService.deleteAllPersons(),
      this.tagService.deleteAllTags(),
    ]);

    removeAllDocuments$.subscribe(console.log);

    // this.tagService.deleteAllTags()
    //   .subscribe(res => {
    //     console.log(res);
    //   },
    //   err => console.error(err));
    // this.tagService.createTag('plop-tag', {})
    //   .subscribe(res => {
    //     console.log(res);
    //   },
    //   err => console.error(err)
    // );
  }
}
