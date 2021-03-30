import { ChallengeStatus } from './challenge_status'
import { Person } from './person'
import { Organization } from './organization'
import { ChallengeResult } from './challenge_results'

export interface Challenge {
    readonly id?: string;
    name: string;
    start_date: string;
    end_date: string;
    url?: string;
    status: ChallengeStatus;
    tags?: string[];
    organizers?: Person[];
    organizations?: Organization[];
    challenge_results?: ChallengeResult;
}