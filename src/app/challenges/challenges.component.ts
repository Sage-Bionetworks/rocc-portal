import { Component, OnInit } from '@angular/core';

import { Challenge } from '../challenge';
import { ChallengeService } from '../challenge.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {
  challenges: Challenge[] = [];

  constructor(private challengeService: ChallengeService) { }

  ngOnInit(): void {
    this.getChallenges();
  }

  getChallenges(): void {
    this.challengeService.getChallenges()
        .subscribe(challenges => this.challenges = challenges);
  }

  onSelect(challenge: Challenge): void {
    console.log('Challenge selected', challenge);
  }
}
