import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sage-github-button',
  templateUrl: './sage-github-button.component.html',
  styleUrls: ['./sage-github-button.component.scss']
})
export class SageGithubButtonComponent implements OnInit {

  sage_gh_home = 'https://github.com/Sage-Bionetworks';

  constructor() { }

  ngOnInit(): void {
  }

}
