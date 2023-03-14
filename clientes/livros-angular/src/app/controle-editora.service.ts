import { Injectable } from '@angular/core';
import { Editora } from "./editora";

@Injectable({
  providedIn: 'root'
})

export class ControleEditoraService {
  private editoras: Array<Editora>

  constructor() {
    this.editoras = new Array<Editora>(
      new Editora(1, "Editora Arqueiro"),
      new Editora(2, "Suma"),
      new Editora(3, "Rocco")
    )
  }

  getNomeEditora = (codEditora: number): string => this.editoras.filter(x => x.codEditora === codEditora)[0]?.nome;
  getEditoras = (): Array<Editora> => this.editoras;
}