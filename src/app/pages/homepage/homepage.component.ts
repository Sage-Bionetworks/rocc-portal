import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'rocc-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  @HostBinding('class.main-content') readonly mainContentClass = true;

  constructor() {}

  ngOnInit(): void {}
}
