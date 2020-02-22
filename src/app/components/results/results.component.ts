import { Component, OnInit } from '@angular/core';
import {Heroe, HeroesService } from '../../services/heroes.services';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  keyword: string;
  constructor( public _heroeService: HeroesService ) { }

  ngOnInit() {
    this._heroeService.searchHeroe( this.keyword );
  }

}
