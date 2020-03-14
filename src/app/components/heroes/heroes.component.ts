import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];
  constructor(private _heroesService: HeroesService,
    private _router: Router) {
    console.log('constructor');
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }
  verHeroe(idx: number) {
    this._router.navigate(['/heroe', idx]);
  }

  buscarHeroes(termino: string) {
    const heroesArr: Heroe[] = [];
    termino = termino.toLowerCase();

    for (const heroe of this.heroes) {
      const nombre = heroe.nombre.toLowerCase();
      if (nombre.indexof(termino) >= 1) {
        heroesArr.push(heroe);
      }
    }
    return heroesArr;
  }
}
