import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor()
  {
  }

  title = 'Rentalcars.com';

  pickUpLocation: string;
  pickUpDate: Date = new Date();
  pickUpHour: string = "10";
  pickUpMins: string = "00";

  differentDropOffLocation: boolean = false;
  dropOffLocation: string;
  dropOffDate: Date = new Date();
  dropOffHour: string = "10";
  dropOffMins: string = "00";

  purposeOfRental: string;
  
  isYoungDriver: boolean = true;
  youngDriverAge: number;
}
