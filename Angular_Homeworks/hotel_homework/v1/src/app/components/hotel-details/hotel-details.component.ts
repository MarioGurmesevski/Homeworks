import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from 'src/app/interface/hotel.interface';
import { HotelsService } from 'src/app/service/hotels.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css'],
})
export class HotelDetailsComponent implements OnInit {
  hotel: Hotel | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private hotelsService: HotelsService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];

    this.hotel = this.hotelsService.getHotelById(Number(id));

    // console.log('id', id);
  }

  goBack() {
    this.location.back();
  }
}
