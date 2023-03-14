import { Component } from '@angular/core';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent {
  public editoras = new Array<Editora>;
  public livros = new Array<Livro>;

  private servEditora: ControleEditoraService;
  private servLivros: ControleLivrosService;

  constructor(servEditora: ControleEditoraService, servLivros: ControleLivrosService) {
    this.servEditora = servEditora;
    this.servLivros = servLivros;
  }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.servLivros.obterLivros().then((result) => {
      this.livros = result;
    });
  };

  excluir = (codigo: string): void => {
    this.servLivros.excluir(codigo).then(() => {
      this.servLivros.obterLivros().then((result) => {
        this.livros = result;
      });
    });
  }

  obterNome = (codigo: number): string => this.servEditora.getNomeEditora(codigo);
}
