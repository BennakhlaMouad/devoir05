import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Parfum } from '../model/parfum.model';
import { Categorie } from '../model/categorie.model';
import { ParfumService } from '../services/parfum.service';

@Component({
  selector: 'app-update-parfum',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-parfum.component.html',
  styles: ``
})
export class UpdateParfumComponent implements OnInit {
  currentParfum = new Parfum();
  categories!: Categorie[];
  updatedCatId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private parfumService: ParfumService
  ) {}

  ngOnInit(): void {
    this.categories = this.parfumService.listeCategories();
    this.currentParfum = this.parfumService.consulterParfum(
      this.activatedRoute.snapshot.params['id']
    );
    this.updatedCatId = this.currentParfum.categorie.idCat;
  }

  updateParfum() {
    this.currentParfum.categorie = this.parfumService.consulterCategorie(this.updatedCatId);
    this.parfumService.updateParfum(this.currentParfum);
    this.router.navigate(['parfums']);
  }
}