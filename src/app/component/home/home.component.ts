import { Component, OnInit } from '@angular/core';

// import { SageAngularComponent } from '@sage-bionetworks/sage-angular';

@Component({
  selector: 'rocc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Registry of Open Community Challenges';

  constructor() { }

  ngOnInit(): void {
  }

}
