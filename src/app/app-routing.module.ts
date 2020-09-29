import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { ParkingOptionsComponent } from './parking-options/parking-options.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'homepage',component:HomePageComponent},
  {path:'aboutus',component: AboutusComponent},
  {path:'location',component: LocationComponent},
  {path:'login',component: LoginComponent},
  {path:'parkingoptions',component: ParkingOptionsComponent},
  {path:'parkingoptions',component: ParkingOptionsComponent},
  {path:'reservations',component: ReservationsComponent},
  {path:'register',component: SignupComponent},
  {path:'',redirectTo: '/homepage',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
