import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  
  @Output() pagina!: any;
  
  page: number = 1;

  changePage(newPage : number){
    this.page = newPage ;
    
  }

}
