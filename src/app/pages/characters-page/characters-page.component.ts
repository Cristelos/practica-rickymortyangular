import { CharactersService } from './../../shared/services/characters.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent {
  character: any;
  constructor(private characterService: CharactersService){
    this.characterService.  getCharacters().subscribe((res:any) => {
      this.character = res.results;
    });
  }
}
