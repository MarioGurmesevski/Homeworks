import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, map, mergeMap } from 'rxjs';
import { Hotel } from 'src/app/interface/hotel.interface';
import { HotelsService } from 'src/app/service/hotels.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css'],
})
export class HotelDetailsComponent implements OnInit, OnDestroy {
  hotel: Hotel | undefined;
  subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private hotelsService: HotelsService
  ) {}

  ngOnInit() {
    this.subscription = this.route.params
      .pipe(
        map((params) => Number(params['id'])),
        mergeMap((id) =>
          this.hotelsService.hotels$.pipe(
            map((hotels) => hotels.find((h) => h.id === id))
          )
        )
      )
      .subscribe((hotel) => {
        this.hotel = hotel;
      });
  }

  goBack() {
    this.location.back();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
