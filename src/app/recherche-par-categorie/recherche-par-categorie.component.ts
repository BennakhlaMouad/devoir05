import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Parfum } from '../model/parfum.model';
import { Categorie } from '../model/categorie.model';
import { ParfumService } from '../services/parfum.service';

@Component({
  selector: 'app-recherche-par-categorie',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './recherche-par-categorie.component.html',
  styles: ``
})
export class RechercheParCategorieComponent implements OnInit {
  parfums!: Parfum[];
  IdCategorie!: number;
  categories!: Categorie[];

  constructor(private parfumService: ParfumService) {}

  ngOnInit(): void {
    this.categories = this.parfumService.listeCategories();
    this.parfums = this.parfumService.listeParfums();
  }

  onChange() {
    this.parfums = this.parfumService.rechercherParCategorie(this.IdCategorie);
  }
}