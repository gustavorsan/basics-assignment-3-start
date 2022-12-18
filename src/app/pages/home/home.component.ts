import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  details =  'Secret Password = tuna';
  showDetails = false;
  buttonClicks = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleDetails(){
    this.buttonClicks.push(new Date());
    this.showDetails = !this.showDetails;
  }

}
