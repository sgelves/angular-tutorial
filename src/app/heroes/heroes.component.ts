import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/heroe'
import { HEROES } from '../models/mock-heroes';
import { DumbApiService } from '../dumb-api.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {

  hero;
  heroes = HEROES;

  constructor(private dumbApiService: DumbApiService) { }

  onSelect (hero) {
    this.hero = hero
    this.dumbApiService.getClientList()
      .subscribe(data => {
        console.log('data', data)
      })
  }

  ngOnInit() {
  }

}
