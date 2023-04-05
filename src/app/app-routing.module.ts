import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersDetailPageComponent } from './pages/characters-detail-page/characters-detail-page.component';

const routes: Routes = [
  {
    path: "", component: HomePageComponent
  },
  {
    path: "character", component: CharactersPageComponent
  },
  {
    path: "character/:id", component: CharactersDetailPageComponent
  },
  {
    path: "contact", component: ContactPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
