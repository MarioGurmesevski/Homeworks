import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelManagementComponent } from './components/hotel-management/hotel-management.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
import { HotelFormComponent } from './components/hotel-form/hotel-form.component';
import { RoomFormComponent } from './components/room-form/room-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'hotels', pathMatch: 'full' },
  { path: 'hotels', component: HotelManagementComponent },
  { path: 'hotels/:id', component: HotelDetailsComponent },
  { path: 'hotelform', component: HotelFormComponent },
  { path: 'hotelform/:id', component: HotelFormComponent },
  { path: 'hotels/:id/roomform', component: RoomFormComponent },
  { path: 'hotels/:id/roomform/:id', component: RoomFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
