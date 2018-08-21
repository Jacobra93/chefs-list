import { NavFooterService } from './../nav-footer.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public navFooterService: NavFooterService, private router: Router) {}


  ngOnInit() {

  }

}
