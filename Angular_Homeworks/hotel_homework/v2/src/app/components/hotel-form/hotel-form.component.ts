import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { StarRating } from '../../interface/star-rating.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelsService } from 'src/app/service/hotels.service';
import { Subscription, map, mergeMap } from 'rxjs';
import { Hotel } from 'src/app/interface/hotel.interface';

const urlRegex =
  /^((http|https|ftp|www):\/\/)?([a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)_\-\=\+\\\/\?\.\:\;\'\,]*)(\.)([a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)_\-\=\+\\\/\?\.\:\;\'\,]+)/g;
@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.css'],
})
export class HotelFormComponent implements OnInit {
  hotelForm = new FormGroup({
    id: new FormControl<number>(Math.floor(Math.random() * 1000)),

    name: new FormControl<string>(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40),
      ])
    ),

    address: new FormControl<string>('', Validators.required),

    city: new FormControl<string>('', Validators.required),

    stars: new FormControl<StarRating>(StarRating.one, Validators.required),

    country: new FormControl<string>('', Validators.required),

    image: new FormControl<string>(
      '',
      Validators.compose([Validators.required, Validators.pattern(urlRegex)])
    ),
  });

  stars = Object.values(StarRating);

  subscription: Subscription = new Subscription();

  isEditing: boolean = false;

  get nameHasErrorRequired() {
    return this.hotelForm.get('name')?.hasError('required');
  }

  get nameHasErrorMinLength() {
    return this.hotelForm.get('name')?.hasError('minlength');
  }

  get nameHasErrorMaxLength() {
    return this.hotelForm.get('name')?.hasError('maxlength');
  }

  get imageHasErrorRequired() {
    return this.hotelForm.get('image')?.hasError('required');
  }

  get imageHasErrorPattern() {
    return this.hotelForm.get('image')?.hasError('pattern');
  }

  get isNameInvalid() {
    return (
      this.hotelForm.get('name')?.invalid &&
      (this.hotelForm.get('name')?.touched || this.hotelForm.get('name')?.dirty)
    );
  }

  get isAddressInvalid() {
    return (
      this.hotelForm.get('address')?.invalid &&
      (this.hotelForm.get('address')?.touched ||
        this.hotelForm.get('address')?.dirty)
    );
  }

  get isCountryInvalid() {
    return (
      this.hotelForm.get('country')?.invalid &&
      (this.hotelForm.get('country')?.touched ||
        this.hotelForm.get('country')?.dirty)
    );
  }

  get isCityInvalid() {
    return (
      this.hotelForm.get('city')?.invalid &&
      (this.hotelForm.get('city')?.touched || this.hotelForm.get('city')?.dirty)
    );
  }

  get isStarsInvalid() {
    return (
      this.hotelForm.get('stars')?.invalid &&
      (this.hotelForm.get('stars')?.touched ||
        this.hotelForm.get('stars')?.dirty)
    );
  }

  get isImageInvalid() {
    return (
      this.hotelForm.get('image')?.invalid &&
      (this.hotelForm.get('image')?.touched ||
        this.hotelForm.get('image')?.dirty)
    );
  }

  constructor(
    private hotelsService: HotelsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.route.params
      .pipe(
        map((params) => Number(params['id'])),
        mergeMap((id) =>
          this.hotelsService.hotels$.pipe(
            map((hotels) => hotels.find((h) => h.id === id || null))
          )
        )
      )
      .subscribe((hotel: Hotel | undefined) => {
        if (hotel) {
          this.isEditing = true;
          const hoteL = {
            ...hotel,
          };
          this.hotelForm.patchValue(hoteL);
        } else {
          this.router.navigate(['/hotelform']);
        }
      });
  }

  onSubmit() {
    const hotel = {
      ...this.hotelForm.value,
    };

    if (this.isEditing) {
      this.hotelsService.updateHotel(hotel as Hotel);
    } else {
      this.hotelsService.addHotel(hotel as Hotel);
    }

    this.router.navigate(['/hotels']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
