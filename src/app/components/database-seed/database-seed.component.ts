import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import {
  ChallengeService,
  OrganizationService,
  PersonService,
  TagService
} from '@sage-bionetworks/rocc-client-angular';
import { Tag } from '@sage-bionetworks/rocc-client-angular';
import tagList from '../../seeds/dream/tags.json';
import orgList from '../../seeds/dream/organizations.json';
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
    const removeDocuments$ = forkJoin([
      this.challengeService.deleteAllChallenges(),
      this.organizationService.deleteAllOrganizations(),
      this.personService.deleteAllPersons(),
      this.tagService.deleteAllTags(),
    ]);

    // const tags: Tag[] = tagList.tags;
    const tags = tagList.tags; // TODO: replace by above line when Tag.tagId is no longer optional
    const Organizations = orgList.organizations;

    const addTags$ = forkJoin(
      tags.map(tag => this.tagService.createTag(tag.tagId, {}))
    );
    
    const addOrganizations$ = forkJoin(
      Organizations.map(org => this.organizationService.createOrganization(
        org.organizationId, 
        {
        "name": org.name,
        "url": org.url,
        "shortName": org.shortName
        }))
    );
    
    removeDocuments$
      .pipe(
        mergeMap(() => addTags$),
        tap(console.log),
        // mergeMap(() => addPersons$)
      )
      .pipe(
        mergeMap(() => addOrganizations$),
        tap(console.log),
      )
      .subscribe(res => {
        console.log('done');
      }, err => console.log);
  }
}
