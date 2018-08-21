import { AuthService } from './../services/auth.service';
import { NavFooterService } from './../nav-footer.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public router: Router, public navFooterService: NavFooterService, private authService: AuthService) { }

  ngOnInit() {
  }

}
