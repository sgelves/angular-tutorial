import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/heroe'
import { HEROES } from '../models/mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {

  hero;
  heroes = HEROES;

  onSelect (hero) {
    this.hero = hero
  }

  ngOnInit() {
  }

}
