import { NavFooterService } from './../nav-footer.service';
import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe'


@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css']
})
export class RecipesPageComponent implements OnInit {
  recipes: Recipe[] = [
    {name: 'Chili'},
    {name: 'Chicken and Dumplins'},
    {name: 'Tacos'}
  ]

  constructor(public navFooterService: NavFooterService ) { }

  ngOnInit() {
    this.fakeNews();
  }

  fakeNews() {
    console.log('here');
  }
}
