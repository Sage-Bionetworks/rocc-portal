import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Challenge } from './challenge';
import { CHALLENGES } from './mock-challenges';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor() { }

  getChallenges(): Observable<Challenge[]> {
    const challenges = of(CHALLENGES);
    return challenges;
  }
}
