import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit 
{
  constructor(private router:Router) { }
  onLogin(form)
    {
      
          this.router.navigateByUrl('/aboutus');
    }

  // constructor() { }

  ngOnInit() {
  }

}
