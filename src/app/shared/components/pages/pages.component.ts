import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  
   @Output() pagina = new EventEmitter<number>();
  
  page: number = 1;

  changePage(newPage : number){
    this.page = newPage ;
    this.pagina.emit(this.page);
    
  }

}
