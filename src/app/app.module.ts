import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatInputModule,MatDialogModule,MatIconModule, MatButtonModule,
  MatCheckboxModule,MatRippleModule,MatNativeDateModule,
  MatCardModule,MatToolbarModule,MatExpansionModule,} from '@angular/material';
  import { MatFormFieldModule } from '@angular/material/form-field';
  import {MatSelectModule} from '@angular/material/select';


  import { MatTabsModule } from '@angular/material';
  import { MatPaginatorModule } from '@angular/material/paginator';

  import {FormsModule} from '@angular/forms';
  import{HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ReservationsComponent } from './reservations/reservations.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ParkingOptionsComponent } from './parking-options/parking-options.component';
import { LocationComponent } from './location/location.component';
// import { ReservationComponent } from './reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutusComponent,
    ReservationsComponent,
    LoginComponent,
    SignupComponent,
    ParkingOptionsComponent,
    LocationComponent,
    // ReservationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatInputModule,MatIconModule, MatButtonModule,
    MatCheckboxModule,MatFormFieldModule,MatRippleModule,MatDatepickerModule,
    MatCardModule,MatToolbarModule,MatExpansionModule,MatSelectModule,MatNativeDateModule,
    MatTabsModule,MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
