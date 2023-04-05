import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-characters-detail-page',
  templateUrl: './characters-detail-page.component.html',
  styleUrls: ['./characters-detail-page.component.scss'],
})
export class CharactersDetailPageComponent implements OnInit {
  detalles: any;

  constructor(
    private characterService: CharactersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      console.log('el valor de la ruta es' + id);
      this.characterService
      .getCharactersId(id)
      .subscribe((res: any) => {
        this.detalles = res;
      });
      // this.getCharactersId(id);
    });
  }

  // getCharactersId(id:any){

  // }
}
