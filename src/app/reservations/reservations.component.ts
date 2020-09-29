import { Component, OnInit } from '@angular/core';
interface ParkingOptions {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit 
{


  constructor() { }
  options: ParkingOptions[] = 
  [
    {value: 'steak-0', viewValue: 'Premium-Rs30'},
    {value: 'pizza-1', viewValue: 'Standard-Rs18'},
    {value: 'pizza-1', viewValue: 'Basic-Rs10'},
    {value: 'tacos-2', viewValue: 'Economy-Rs6'}
  ];

  ngOnInit() {
  }

}
