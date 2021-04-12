import { Component, OnInit } from '@angular/core';

import { Organization } from '@sage-bionetworks/rocc-client-angular'
import { ORGANIZATIONS } from '../../mock-organizations';

@Component({
    selector: 'rocc-organizations',
    templateUrl: './organizations.component.html',
    styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {
    title = 'Organizations';
    organizations: Organization[] = [];

    constructor() {}

    ngOnInit(): void {
        this.organizations = ORGANIZATIONS;
    }
}
