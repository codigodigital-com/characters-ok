import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../../models/character.interface';
import { CharactersService } from '../../services/characters.service';

import { MatAccordion } from '@angular/material/expansion';
@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.css'],
})
export class CharactersDetailComponent implements OnInit {
  character!: Character;
  showDetail: boolean = false;

  panelOpenState = false;

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor(
    private charactersService: CharactersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifer = this.activatedRoute.snapshot.paramMap.get('id');

    this.charactersService
      .getCharacterById(identifer!)
      .subscribe((character: Character) => {
        if (!character) {
          return this.router.navigateByUrl('/');
        }

        return (this.character = character);
      });
  }

  home() {
    return this.router.navigateByUrl('/');
  }

  toggleShowDetails() {
    this.showDetail = !this.showDetail;
  }
}
