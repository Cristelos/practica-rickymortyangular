import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  
  page: number = 1;
  
  @Output() pagina = new EventEmitter();
  
 

  changePage(newPage : number){
    this.page = newPage ;
    this.pagina.emit(newPage);
    
  }

}
