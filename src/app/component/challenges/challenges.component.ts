import { Component, OnInit } from '@angular/core';
// import { Observable, of } from 'rxjs';

import { Challenge } from '@sage-bionetworks/rocc-angular/model/challenge'
import { CHALLENGES } from '../../mock-challenges';

@Component({
    selector: 'rocc-challenges',
    templateUrl: './challenges.component.html',
    styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {
    title = 'Challenges';
    challenges: Challenge[] = [];
    selectedChallenge?: Challenge;

    constructor() {}

    ngOnInit(): void {
        this.challenges = CHALLENGES;
    }

    onSelect(challenge: Challenge): void {
        this.selectedChallenge = challenge;
    }
}
