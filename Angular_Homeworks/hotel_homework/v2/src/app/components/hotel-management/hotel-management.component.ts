import { StarRating } from '../../interface/star-rating.enum';
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

  getStarRatingSymbol(rating: StarRating): string {
    console.log(rating);
    if (rating === StarRating.one) {
      return '★';
    } else if (rating === StarRating.two) {
      return '★★';
    } else if (rating === StarRating.three) {
      return '★★★';
    } else if (rating === StarRating.four) {
      return '★★★★';
    } else if (rating === StarRating.five) {
      return '★★★★★';
    } else {
      return '';
    }
  }
  onEdit(hotelId: number) {
    this.router.navigate(['/hotelform', hotelId]);
  }

  onDelete(hotelId: number) {
    this.hotelsService.deleteHotel(hotelId);
  }
}
