import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Observable, of } from 'rxjs';
import { Subscription } from 'rxjs';

import { Challenge } from '@sage-bionetworks/rocc-client-angular';
import { ChallengeService } from '@sage-bionetworks/rocc-client-angular';

@Component({
    selector: 'rocc-challenges',
    templateUrl: './challenges.component.html',
    styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit, OnDestroy {
    title = 'Challenges';
    challenges: Challenge[] = [];
    selectedChallenge?: Challenge;
    private challengeSub!: Subscription;

    constructor(private challengeService: ChallengeService) {}

    ngOnInit(): void {
        this.challengeSub = this.challengeService.listChallenges()
            .subscribe(res => {
                if (res.challenges) {
                    this.challenges = res.challenges;
                }
            },
            err => console.error(err)
        );
    }

    ngOnDestroy(): void {
        this.challengeSub.unsubscribe();
    }

    onSelect(challenge: Challenge): void {
        this.selectedChallenge = challenge;
    }
}
