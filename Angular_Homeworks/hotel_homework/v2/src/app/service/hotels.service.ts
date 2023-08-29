import { Injectable } from '@angular/core';
import { Hotel } from '../interface/hotel.interface';
import { StarRating } from '../interface/star-rating.enum';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HotelsService {
  private hotelsMainData: Hotel[] = [
    {
      id: 1,
      name: 'Alexandria Hotel',
      address: 'Egnatia 18',
      city: 'Thessaloniki',
      country: 'Greece',
      stars: StarRating.one, // 1-5
      image: 'https://via.placeholder.com/150',
      rooms: [
        {
          id: 1,
          name: 'Room Name',
          description: 'Room Description',
          image: 'https://via.placeholder.com/150',
          price: 48,
          people: 2,
          children: 1,
          amenities: [
            'Pet friendly',
            'Free WiFi',
            'Air conditioning',
            'Breakfast available',
            'Parking available',
            'Laundry',
          ],
          isAvailable: false,
        },
      ],
    },
    {
      id: 2,
      name: 'Sunset View Resort',
      address: '123 Ocean Drive',
      city: 'Miami',
      country: 'USA',
      stars: StarRating.four,
      image: 'https://via.placeholder.com/150',
      rooms: [
        {
          id: 1,
          name: 'Deluxe Oceanfront Suite',
          description:
            'Enjoy breathtaking views of the ocean in our spacious suite.',
          image: 'https://via.placeholder.com/150',
          price: 250,
          people: 2,
          children: 0,
          amenities: [
            'Free WiFi',
            'Ocean view',
            'Private balcony',
            'Pool access',
            'Spa',
          ],
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      name: 'Chateau de Luxe',
      address: 'Rue de la Paix 8',
      city: 'Paris',
      country: 'France',
      stars: StarRating.five,
      image: 'https://via.placeholder.com/150',
      rooms: [
        {
          id: 1,
          name: 'Royal Suite',
          description:
            'Indulge in luxury with our elegantly designed royal suite.',
          image: 'https://via.placeholder.com/150',
          price: 800,
          people: 2,
          children: 0,
          amenities: [
            'Free WiFi',
            'City view',
            'Butler service',
            'Gourmet dining',
            'Spa',
          ],
          isAvailable: false,
        },
      ],
    },
    {
      id: 4,
      name: 'Zen Retreat Lodge',
      address: 'Mount Serenity Road',
      city: 'Kyoto',
      country: 'Japan',
      stars: StarRating.three,
      image: 'https://via.placeholder.com/150',
      rooms: [
        {
          id: 1,
          name: 'Tranquility Room',
          description: 'Find inner peace in our serene and minimalistic room.',
          image: 'https://via.placeholder.com/150',
          price: 180,
          people: 1,
          children: 0,
          amenities: [
            'Free WiFi',
            'Zen garden',
            'Japanese tea service',
            'Meditation classes',
          ],
          isAvailable: true,
        },
      ],
    },
    {
      id: 5,
      name: 'Bella Vista Lodge',
      address: 'Calle Mirador 6',
      city: 'Barcelona',
      country: 'Spain',
      stars: StarRating.two,
      image: 'https://via.placeholder.com/150',
      rooms: [
        {
          id: 1,
          name: 'Panoramic Suite',
          description:
            'Experience stunning city views from our luxurious panoramic suite.',
          image: 'https://via.placeholder.com/150',
          price: 320,
          people: 2,
          children: 1,
          amenities: [
            'Free WiFi',
            'City view',
            'Private terrace',
            'Rooftop bar',
            'Fitness center',
          ],
          isAvailable: true,
        },
      ],
    },
    {
      id: 6,
      name: 'Alpine Lodge',
      address: 'Mountain Pass Road',
      city: 'Zurich',
      country: 'Switzerland',
      stars: StarRating.four,
      image: 'https://via.placeholder.com/150',
      rooms: [
        {
          id: 1,
          name: 'Mountain View Chalet',
          description:
            'Experience the beauty of the Swiss Alps in our cozy mountain chalet.',
          image: 'https://via.placeholder.com/150',
          price: 280,
          people: 4,
          children: 2,
          amenities: [
            'Free WiFi',
            'Mountain view',
            'Fireplace',
            'Ski-in/ski-out',
            'Sauna',
          ],
          isAvailable: false,
        },
      ],
    },
    {
      id: 7,
      name: 'Tropical Paradise Resort',
      address: 'Palm Beach Avenue',
      city: 'Bali',
      country: 'Indonesia',
      stars: StarRating.one,
      image: 'https://via.placeholder.com/150',
      rooms: [
        {
          id: 1,
          name: 'Beachfront Villa',
          description:
            'Unwind in luxury with direct access to the white sand beach.',
          image: 'https://via.placeholder.com/150',
          price: 450,
          people: 2,
          children: 0,
          amenities: [
            'Free WiFi',
            'Beachfront',
            'Private pool',
            'Gourmet dining',
            'Spa',
          ],
          isAvailable: true,
        },
      ],
    },
    {
      id: 8,
      name: 'Historic Plaza Hotel',
      address: 'Main Street 15',
      city: 'New Orleans',
      country: 'USA',
      stars: StarRating.three,
      image: 'https://via.placeholder.com/150',
      rooms: [
        {
          id: 1,
          name: 'Antebellum Suite',
          description:
            'Step back in time and experience Southern charm in our historic suite.',
          image: 'https://via.placeholder.com/150',
          price: 180,
          people: 2,
          children: 0,
          amenities: [
            'Free WiFi',
            'Historic ambiance',
            'Courtyard garden',
            'Live jazz bar',
          ],
          isAvailable: false,
        },
      ],
    },
    {
      id: 9,
      name: 'Safari Dreams Lodge',
      address: 'Savannah Drive',
      city: 'Nairobi',
      country: 'Kenya',
      stars: StarRating.two,
      image: 'https://via.placeholder.com/150',
      rooms: [
        {
          id: 1,
          name: 'Savannah Suite',
          description:
            'Immerse yourself in the heart of the African savannah in our themed suite.',
          image: 'https://via.placeholder.com/150',
          price: 320,
          people: 2,
          children: 1,
          amenities: [
            'Free WiFi',
            'Savannah view',
            'Outdoor terrace',
            'Game drives',
            'Guided walks',
          ],
          isAvailable: true,
        },
      ],
    },
    {
      id: 10,
      name: 'Urban Oasis Hotel',
      address: 'Downtown Avenue 22',
      city: 'Tokyo',
      country: 'Japan',
      stars: StarRating.four,
      image: 'https://via.placeholder.com/150',
      rooms: [
        {
          id: 1,
          name: 'Metropolitan Suite',
          description:
            'Experience the vibrant city life of Tokyo in our modern suite.',
          image: 'https://via.placeholder.com/150',
          price: 280,
          people: 2,
          children: 0,
          amenities: [
            'Free WiFi',
            'City view',
            'Sky lounge',
            'Fitness center',
            'Spa',
          ],
          isAvailable: true,
        },
      ],
    },
    {
      id: 11,
      name: 'Mystic Retreat Lodge',
      address: 'Forest Trail 7',
      city: 'Asheville',
      country: 'USA',
      stars: StarRating.three,
      image: 'https://via.placeholder.com/150',
      rooms: [
        {
          id: 1,
          name: 'Enchanted Cabin',
          description:
            'Escape to the tranquility of the woods in our enchanting cabin.',
          image: 'https://via.placeholder.com/150',
          price: 150,
          people: 2,
          children: 0,
          amenities: [
            'Free WiFi',
            'Forest view',
            'Private hot tub',
            'Nature walks',
          ],
          isAvailable: true,
        },
      ],
    },
    {
      id: 12,
      name: 'Seaside Paradise Resort',
      address: 'Coastal Highway 25',
      city: 'Sydney',
      country: 'Australia',
      stars: StarRating.four,
      image: 'https://via.placeholder.com/150',
      rooms: [
        {
          id: 1,
          name: 'Oceanfront Bungalow',
          description:
            'Experience the beauty of the Australian coastline in our cozy bungalow.',
          image: 'https://via.placeholder.com/150',
          price: 380,
          people: 2,
          children: 1,
          amenities: [
            'Free WiFi',
            'Beachfront',
            'Private veranda',
            'Water sports',
            'Spa',
          ],
          isAvailable: true,
        },
      ],
    },
    {
      id: 13,
      name: 'Majestic Castle Hotel',
      address: 'Royal Road 1',
      city: 'Edinburgh',
      country: 'Scotland',
      stars: StarRating.five,
      image: 'https://via.placeholder.com/150',
      rooms: [
        {
          id: 1,
          name: 'Royal Suite',
          description:
            'Live like royalty in our opulent suite within a historic castle.',
          image: 'https://via.placeholder.com/150',
          price: 650,
          people: 2,
          children: 0,
          amenities: [
            'Free WiFi',
            'Castle ambiance',
            'Private butler',
            'Fine dining',
            'Spa',
          ],
          isAvailable: false,
        },
      ],
    },
    {
      id: 14,
      name: 'Desert Mirage Resort',
      address: 'Oasis Avenue 12',
      city: 'Dubai',
      country: 'UAE',
      stars: StarRating.five,
      image: 'https://via.placeholder.com/150',
      rooms: [
        {
          id: 1,
          name: 'Luxury Suite',
          description:
            'Experience the grandeur of Dubai in our luxurious desert suite.',
          image: 'https://via.placeholder.com/150',
          price: 550,
          people: 2,
          children: 0,
          amenities: [
            'Free WiFi',
            'Desert view',
            'Private pool',
            'Gourmet dining',
            'Spa',
          ],
          isAvailable: false,
        },
      ],
    },
    {
      id: 15,
      name: 'Elegant Manor Hotel',
      address: 'High Street 3',
      city: 'London',
      country: 'UK',
      stars: StarRating.four,
      image: 'https://via.placeholder.com/150',
      rooms: [
        {
          id: 1,
          name: 'Classic Suite',
          description:
            'Experience timeless elegance in our sophisticated classic suite.',
          image: 'https://via.placeholder.com/150',
          price: 280,
          people: 2,
          children: 0,
          amenities: [
            'Free WiFi',
            'Classic decor',
            'Afternoon tea',
            'Fitness center',
          ],
          isAvailable: true,
        },
      ],
    },
  ];

  private hotelData: BehaviorSubject<Hotel[]> = new BehaviorSubject<Hotel[]>(
    this.hotelsMainData
  );

  hotels$: Observable<Hotel[]> = this.hotelData.asObservable();

  private updateHotelData(hotels: Hotel[]): void {
    this.hotelData.next(hotels);
    // console.log(hotels);
  }

  getHotels(): Observable<Hotel[]> {
    // console.log(this.hotels$);
    return this.hotels$;
  }

  addHotel(hotel: Hotel) {
    console.log(hotel);
    const hotels = this.hotelData.getValue();
    hotels.push(hotel);

    console.log(hotels);

    this.updateHotelData(hotels);
  }

  updateHotel(hotel: Hotel) {
    const hotels = this.hotelData.getValue();
    const index = hotels.findIndex((h) => h.id === hotel.id);
    hotels[index] = {
      ...hotels[index],
      ...hotel,
    };
    this.updateHotelData(hotels);
  }

  deleteHotel(hotelId: number) {
    let hotels: Hotel[] = this.hotelData.getValue();

    hotels = hotels.filter((h) => h.id !== hotelId);

    this.updateHotelData(hotels);
  }
}
