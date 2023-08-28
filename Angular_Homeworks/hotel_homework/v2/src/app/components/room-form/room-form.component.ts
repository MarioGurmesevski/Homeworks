import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css'],
})
export class RoomFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  /* get rooms() {
       return this.hotelForm.get('rooms') as FormArray;
     }
  
     addRoom() {
       const roomGroup = new FormGroup({
         id: new FormControl<number>(Math.floor(Math.random() * 1000)),
  
         name: new FormControl<string>('', Validators.required),
  
         description: new FormControl<string>('', Validators.required),
  
         image: new FormControl<string>(
           '',
           Validators.compose([
             Validators.required,
             Validators.pattern('https?://.*'),
           ])
         ),
  
         price: new FormControl<number>(
           0,
           Validators.compose([Validators.required, Validators.min(1)])
         ),
  
         people: new FormControl<number>(
           1,
           Validators.compose([Validators.required, Validators.min(1)])
         ),
  
         children: new FormControl<number>(0, Validators.required),
  
         amenities: new FormControl<string[]>([], Validators.required),
  
         isAvailable: new FormControl<boolean>(true, Validators.required),
       });
  
       this.rooms.push(roomGroup)
     } 

 get roomImageErrorMaxRequired() {
        return this.rooms.get('image')?.hasError('required');
      }
    
      get roomImageHasErrorMaxPattern() {
        return this.rooms.get('image')?.hasError('pattern');
      }
    
      get roomPriceErrorMaxRequired() {
        return this.rooms.get('price')?.hasError('required');
      }
    
      get roomPriceErrorMaxMin() {
        return this.rooms.get('price')?.hasError('min');
      }
    
      get roomPeopleErrorMaxRequired() {
        return this.rooms.get('people')?.hasError('required');
      }
    
      get roomPeopleErrorMaxMin() {
        return this.rooms.get('people')?.hasError('min');
      } 
 get isRoomNameInvalid() {
   return (
     this.rooms.get('name')?.invalid &&
     (this.rooms.get('name')?.touched ||
       this.rooms.get('name')?.dirty)
   );
 }

 get isRoomDescriptionInvalid() {
   return (
     this.rooms.get('description')?.invalid &&
     (this.rooms.get('description')?.touched ||
       this.rooms.get('description')?.dirty)
   );
 }

 get isRoomImageInvalid() {
   return (
     this.rooms.get('image')?.invalid &&
     (this.rooms.get('image')?.touched ||
       this.rooms.get('image')?.dirty)
   );
 }

 get isRoomPriceInvalid() {
   return (
     this.rooms.get('price')?.invalid &&
     (this.rooms.get('price')?.touched ||
       this.rooms.get('price')?.dirty)
   );
 }

 get isRoomPeopleInvalid() {
   return (
     this.rooms.get('people')?.invalid &&
     (this.rooms.get('people')?.touched ||
       this.rooms.get('people')?.dirty)
   );
 }

 get isRoomChildrenInvalid() {
   return (
     this.rooms.get('children')?.invalid &&
     (this.rooms.get('children')?.touched ||
       this.rooms.get('children')?.dirty)
   );
 }

 get isRoomAmenitiesInvalid() {
   return (
     this.rooms.get('amenities')?.invalid &&
     (this.rooms.get('amenities')?.touched ||
       this.rooms.get('amenities')?.dirty)
   );
 }

 get isRoomAvailableInvalid() {
   return (
     this.rooms.get('isAvailable')?.invalid &&
     (this.rooms.get('isAvailable')?.touched ||
       this.rooms.get('isAvailable')?.dirty)
   );
 }
*/
}
