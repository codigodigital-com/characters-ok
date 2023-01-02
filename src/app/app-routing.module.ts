import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersDetailComponent } from './components/characters-detail/characters-detail.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';

const routes: Routes = [
  { path: '', component: CharactersListComponent },
  { path: 'character/:id', component: CharactersDetailComponent },
  { path: '**', component: CharactersListComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
