import { Component, OnInit } from '@angular/core';

import { Challenge } from '../../model/challenge';
import { CHALLENGES } from '../../mock-challenges';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {

  title = 'Challenges';
  challenges = CHALLENGES;

  selectedChallenge?: Challenge;
  onSelect(challenge: Challenge): void {
    this.selectedChallenge = challenge;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
