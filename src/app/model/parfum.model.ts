import { Categorie } from './categorie.model';

export class Parfum {
  idParfum!: number;
  nomParfum!: string;
  prixParfum!: number;
  dateCreation!: Date;
  categorie!: Categorie;
}