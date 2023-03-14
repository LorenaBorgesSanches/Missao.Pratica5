import { Injectable } from '@angular/core';
import { Livro } from './livro';

interface LivroMongo {
  _id: string | null,
  codEditora: number,
  titulo: string,
  resumo: string,
  autores: string[]
}

@Injectable({
  providedIn: 'root'
})

export class ControleLivrosService {

  private baseURL = "http://localhost:3030/livros"

  constructor() {
  }

  public async obterLivros(): Promise<Array<Livro>> {
    const result = await fetch(this.baseURL);
    return await result.json();
  }

  public async incluir(livro: Livro): Promise<boolean> {
    let livroMongo: LivroMongo = { ...livro };
    livroMongo._id = null;

    const result = await fetch(this.baseURL, {
      method: 'POST',
      body: JSON.stringify(livroMongo),
      headers: { 'Content-Type': 'application/json' }
    });
    return result.ok;
  }

  public async excluir(codigo: string): Promise<boolean> {
    const result = await fetch(this.baseURL + "/" + codigo, {
      method: 'DELETE'
    });
    return result.ok;
  }

}
