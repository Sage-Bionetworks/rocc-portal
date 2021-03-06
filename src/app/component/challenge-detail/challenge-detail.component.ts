import { Component, OnInit, Input } from '@angular/core';

import { Challenge } from '@sage-bionetworks/rocc-client-angular';

@Component({
    selector: 'rocc-challenge-detail',
    templateUrl: './challenge-detail.component.html',
    styleUrls: ['./challenge-detail.component.scss']
})
export class ChallengeDetailComponent implements OnInit {
    @Input() challenge?: Challenge;

    constructor() {}

    ngOnInit(): void {}
}
