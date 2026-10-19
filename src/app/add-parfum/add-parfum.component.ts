import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Parfum } from '../model/parfum.model';
import { Categorie } from '../model/categorie.model';
import { ParfumService } from '../services/parfum.service';

@Component({
  selector: 'app-add-parfum',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-parfum.component.html',
  styleUrl: './add-parfum.component.css'
})
export class AddParfumComponent implements OnInit {
  newParfum = new Parfum();
  categories!: Categorie[];
  newIdCat!: number;
  newCategorie!: Categorie;

  constructor(private parfumService: ParfumService,
              private router: Router) {}

  ngOnInit(): void {
    this.categories = this.parfumService.listeCategories();
  }

  addParfum() {
    this.newCategorie = this.parfumService.consulterCategorie(this.newIdCat);
    this.newParfum.categorie = this.newCategorie;
    this.parfumService.ajouterParfum(this.newParfum);
    this.router.navigate(['parfums']);
  }
}