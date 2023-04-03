import { IPlanet } from './../../models/interfaces';


import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.scss']
})
export class JuegosComponent {
  @Input() card!: any;
}
