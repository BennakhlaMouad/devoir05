import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Parfum } from '../model/parfum.model';
import { ParfumService } from '../services/parfum.service';
import { SearchFilterPipe } from '../search-filter.pipe';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [FormsModule, CommonModule, SearchFilterPipe],
  templateUrl: './recherche-par-nom.component.html',
  styles: ``
})
export class RechercheParNomComponent implements OnInit {
  parfums!: Parfum[];
  searchTerm!: string;

  constructor(private parfumService: ParfumService) {}

  ngOnInit(): void {
    this.parfums = this.parfumService.listeParfums();
  }
}