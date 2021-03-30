import { Component, OnInit } from '@angular/core';

import { EXPLORE } from '../../mock-explore';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  title = 'Explore the ROCC';
  challenges = EXPLORE;

  constructor() { }

  ngOnInit(): void {
  }

}
