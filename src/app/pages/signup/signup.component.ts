import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'rocc-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @HostBinding('class.main-content') readonly mainContentClass = true;

  constructor() {}

  ngOnInit(): void {}
}
