import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.services';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  heroe: any = {};
  urlImage: string = 'assets/img/dc.png';
  logoMarvel: string = 'assets/img/marvel.png';
  logoDC: string = 'assets/img/dc.png';
  constructor( private activatedRoute: ActivatedRoute,
               private _heroeService: HeroesService )
  {
      this.activatedRoute.params.subscribe( params =>{
        this.heroe = this._heroeService.getHeroe( params['id'] );
        this.getCompany(this.heroe.casa);
        console.log(this.heroe);
      });
  }

  getCompany(casa: string){
    this.urlImage = (casa === 'DC') ? this.logoDC : this.logoMarvel;
    return true;
  }

}
