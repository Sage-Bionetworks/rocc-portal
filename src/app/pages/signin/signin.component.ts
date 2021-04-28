import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'rocc-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  @HostBinding('class.main-content') readonly mainContentClass = true;

  constructor() {}

  ngOnInit(): void {}
}
