import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent {
  router: Router;

  public editoras = new Array<Editora>;
  public livro: Livro;
  public autoresForm: string;

  private servEditora: ControleEditoraService;
  private servLivros: ControleLivrosService;

  constructor(router: Router, servEditora: ControleEditoraService, servLivros: ControleLivrosService) {
    this.router = router;
    this.servEditora = servEditora;
    this.servLivros = servLivros;

    this.livro = new Livro("", 1, "", "", []);
    this.autoresForm = "";
  }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  };

  incluir = (): void => {
    this.livro.autores = this.autoresForm.split('\n');
    this.servLivros.incluir(this.livro).then(() => {
      this.router.navigateByUrl("/lista");
    });
  }
}
