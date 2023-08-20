import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/interface/hotel.interface';
import { HotelsService } from 'src/app/service/hotels.service';

@Component({
  selector: 'app-hotel-management',
  templateUrl: './hotel-management.component.html',
  styleUrls: ['./hotel-management.component.css'],
})
export class HotelManagementComponent implements OnInit {
  hotels: Hotel[] = [];
  constructor(private hotelsService: HotelsService) {}

  ngOnInit() {
    this.hotels = this.hotelsService.getHotels();
  }
}
