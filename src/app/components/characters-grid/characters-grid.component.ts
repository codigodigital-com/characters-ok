import {
  animate,
  sequence,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Character } from '../../models/character.interface';
import { CharactersService } from '../../services/characters.service';

export const fadeOut = trigger('fadeOut', [
  state(
    'void',
    style({
      background: 'blue',
      borderBottomColor: 'blue',
      opacity: 0,
      transform: 'translateX(-550px)',
      'box-shadow': 'none',
    })
  ),
  transition('void => *', sequence([animate('.5s ease-out')])),
  transition('* => void', [animate('5s ease-out')]),
]);

@Component({
  selector: 'app-characters-table',
  templateUrl: './characters-grid.component.html',
  styleUrls: ['./characters-grid.component.css'],
  animations: [fadeOut],
})
export class CharactersGridComponent implements OnInit {
  characters!: Character[];
  displayedColumns: string[] = ['id', 'name', 'images'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  loading: boolean = false;

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.loading = true;
    this.charactersService
      .getAllCharacters()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((characters: Character[]) => (this.characters = characters));
  }

  changeViewTable() {
    this.loading = true;
    this.charactersService
      .getAllCharacters()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((characters: Character[]) => (this.characters = characters));
  }

  changeViewGrid() {
    this.loading = true;
    this.charactersService
      .getAllCharacters()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((characters: Character[]) => (this.characters = characters));
  }
}
