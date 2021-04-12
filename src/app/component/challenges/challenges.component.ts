import { Component, OnInit } from '@angular/core';
// import { Observable, of } from 'rxjs';
import { Subscription } from 'rxjs';

import { Challenge } from '@sage-bionetworks/rocc-client-angular';
import { ChallengeService } from '@sage-bionetworks/rocc-client-angular';
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
    private challengeSub!: Subscription;

    constructor(private challengeService: ChallengeService) {}

    ngOnInit(): void {
        // this.challenges = CHALLENGES;
        this.challengeSub = this.challengeService.listChallenges().subscribe(res => console.log('res', res));
    }

    ngOnDestroy() {
        this.challengeSub.unsubscribe();
    }

    onSelect(challenge: Challenge): void {
        this.selectedChallenge = challenge;
    }
}
