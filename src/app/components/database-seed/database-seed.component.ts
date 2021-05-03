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

    const addTags$ = forkJoin(
      tags.map(tag => this.tagService.createTag(tag.tagId, {}))
    );

    removeDocuments$
      .pipe(
        mergeMap(() => addTags$),
        tap(console.log),
        // mergeMap(() => addPersons$)
      )
      .subscribe(res => {
        console.log('done', res);
      }, err => console.log);
  }
}
