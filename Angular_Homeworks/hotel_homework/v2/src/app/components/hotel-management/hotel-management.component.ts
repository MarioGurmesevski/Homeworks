import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Hotel } from 'src/app/interface/hotel.interface';
import { HotelsService } from 'src/app/service/hotels.service';

@Component({
  selector: 'app-hotel-management',
  templateUrl: './hotel-management.component.html',
  styleUrls: ['./hotel-management.component.css'],
})
export class HotelManagementComponent implements OnInit {
  hotel$: Observable<Hotel[]> = new Observable<Hotel[]>();
  constructor(private hotelsService: HotelsService, private router: Router) {}

  ngOnInit() {
    this.hotel$ = this.getHotels();
  }

  getHotels(): Observable<Hotel[]> {
    return this.hotelsService.getHotels();
  }
}
