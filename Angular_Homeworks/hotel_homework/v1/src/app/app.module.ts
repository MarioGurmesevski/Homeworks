import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelManagementComponent } from './components/hotel-management/hotel-management.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
import { AvailabilityColorDirective } from './directives/availability-color.directive';
import { HotelsService } from './service/hotels.service';

@NgModule({
  declarations: [
    AppComponent,
    HotelManagementComponent,
    HotelDetailsComponent,
    AvailabilityColorDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [HotelsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
