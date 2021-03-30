import { Component, OnInit } from '@angular/core';

import { ORGANIZATIONS } from '../../mock-organizations';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {

  title = 'Organizations';
  organizations = ORGANIZATIONS;

  constructor() { }

  ngOnInit(): void {
  }

}
