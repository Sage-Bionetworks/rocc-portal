import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rocc-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  title = 'About the ROCC';

  constructor() { }

  ngOnInit(): void {
  }

}
