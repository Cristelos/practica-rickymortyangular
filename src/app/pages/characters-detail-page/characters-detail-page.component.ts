import { Component } from '@angular/core';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-characters-detail-page',
  templateUrl: './characters-detail-page.component.html',
  styleUrls: ['./characters-detail-page.component.scss']
})
export class CharactersDetailPageComponent {
   characters!: any

  //  constructor(private characterService: CharactersService){
  //   this.characterService.  getCharactersId().subscribe((res:any) => {
  //     this.characters = res.results;
  //   });
  // }


}
