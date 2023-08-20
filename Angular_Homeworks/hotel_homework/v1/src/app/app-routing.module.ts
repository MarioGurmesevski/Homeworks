import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelManagementComponent } from './components/hotel-management/hotel-management.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'hotels', pathMatch: 'full' },
  { path: 'hotels', component: HotelManagementComponent },
  { path: 'hotels/:id', component: HotelDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
