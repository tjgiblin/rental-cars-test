import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor()
  {
    var todaysDate = new Date();
    
    var pickUpDate = new Date();
    pickUpDate.setDate(todaysDate.getDate() + 2);
  
    var dropOffDate = new Date();
    dropOffDate.setDate(pickUpDate.getDate() + 3);

    this.pickUpDate = pickUpDate;
    this.dropOffDate = dropOffDate;
  }

  title = 'Rentalcars.com';

  pickUpLocation: string;
  pickUpDate: Date = this.pickUpDate;
  pickUpHour: string = "10";
  pickUpMins: string = "00";

  differentDropOffLocation: boolean = false;
  dropOffLocation: string;
  dropOffDate: Date = this.dropOffDate;
  dropOffHour: string = "10";
  dropOffMins: string = "00";

  purposeOfRental: string;
  
  isYoungDriver: boolean = true;
  youngDriverAge: number;
}
