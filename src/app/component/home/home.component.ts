import { Component, OnInit } from '@angular/core';

// import { SageAngularComponent } from '@sage-bionetworks/sage-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Registry of Open Community Challenges';
  short_title = 'ROCC';

  constructor() { }

  ngOnInit(): void {
  }

}
