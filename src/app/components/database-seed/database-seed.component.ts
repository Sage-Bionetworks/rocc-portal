import { Component, OnInit } from '@angular/core';
import { TagService } from '@sage-bionetworks/rocc-client-angular';

@Component({
  selector: 'rocc-database-seed',
  templateUrl: './database-seed.component.html',
  styleUrls: ['./database-seed.component.scss']
})
export class DatabaseSeedComponent implements OnInit {

  constructor(private tagService: TagService) {}

  ngOnInit(): void {
    // this.tagService.deleteAllTags()
    //   .subscribe(res => {
    //     console.log(res);
    //   },
    //   err => console.error(err));
    this.tagService.createTag("plop-tag", {})
      .subscribe(res => {
        console.log(res);
      },
      err => console.error(err)
    );
  }
}
