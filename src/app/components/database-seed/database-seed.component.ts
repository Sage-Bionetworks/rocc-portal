import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import {
  ChallengeService,
  OrganizationService,
  PersonService,
  TagService
} from '@sage-bionetworks/rocc-client-angular';
import tagList from '../../seeds/dream/tags.json';

@Component({
  selector: 'rocc-database-seed',
  templateUrl: './database-seed.component.html',
  styleUrls: ['./database-seed.component.scss']
})
export class DatabaseSeedComponent implements OnInit {

  constructor(
    private challengeService: ChallengeService,
    private organizationService: OrganizationService,
    private personService: PersonService,
    private tagService: TagService
  ) {}

  ngOnInit(): void {
    const removeAllDocuments$ = forkJoin([
      this.challengeService.deleteAllChallenges(),
      this.organizationService.deleteAllOrganizations(),
      this.personService.deleteAllPersons(),
      this.tagService.deleteAllTags(),
    ]);
    
    // removeAllDocuments$.subscribe(console.log)
    removeAllDocuments$.toPromise()
      .then(() => {
        console.log("database is clean!")
        for (let tag of tagList["tags"]) {
          this.tagService.createTag(tag["id"], {})
            .subscribe(id => {
            console.log("Adding ", id)
            })
        }
      })
  }  
}
