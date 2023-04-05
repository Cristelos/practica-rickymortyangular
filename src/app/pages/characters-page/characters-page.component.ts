import { CharactersService } from 'src/app/shared/services/characters.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {

  searchText: string = "";
  character: any;
  pag: number = 1;

  constructor(private characterService: CharactersService){}

  ngOnInit(): void {
    this.getCharacters(1, "");
    
  }

  getCharacters(page: number, text: string){
    this.characterService. getCharacters(page, text).subscribe((res:any) => {
        this.character = res.results;
      });

  }

}
