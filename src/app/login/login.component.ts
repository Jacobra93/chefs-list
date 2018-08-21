import { NavFooterService } from './../nav-footer.service';
import { Component, OnInit } from '@angular/core';

import {AuthService} from '../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = null;

  constructor(private authService: AuthService, private router: Router, public navFooterService: NavFooterService) { }

  ngOnInit() {
   this.navFooterService.hide();
  }


  signInWithFacebook() {
    this.authService.signInWithFacebook()
    .then((res) => { 
        this.router.navigate(['recipes-page'])
        this.navFooterService.show();
      })
    .catch((err) => console.log(err));
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
    .then((res) => {
        this.router.navigate(['recipes-page'])
        this.navFooterService.show();
      })
    .catch((err) => console.log(err));
  }

}

