import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelManagementComponent } from './components/hotel-management/hotel-management.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
import { AvailabilityColorDirective } from './directives/availability-color.directive';
import { HotelsService } from './service/hotels.service';
import { HotelFormComponent } from './components/hotel-form/hotel-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomFormComponent } from './components/room-form/room-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelManagementComponent,
    HotelDetailsComponent,
    AvailabilityColorDirective,
    HotelFormComponent,
    RoomFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [HotelsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
