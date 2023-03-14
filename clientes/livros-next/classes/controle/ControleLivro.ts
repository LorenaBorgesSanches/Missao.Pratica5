import { Livro } from "../modelo/Livro";

const baseURL = "http://localhost:3030/livros";

interface LivroMongo {
    _id: string | null,
    codEditora: number,
    titulo: string,
    resumo: string,
    autores: string[]
}

export class ControleLivro {
    public async obterLivros() {
        const result = await fetch(baseURL);
        return await result.json();
    }

    public async incluir(livro: Livro): Promise<boolean> {
        let livroMongo: LivroMongo = { ...livro };
        livroMongo._id = null;

        const result = await fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(livroMongo),
            headers: { 'Content-Type': 'application/json' }
        });
        return result.ok;
    }

    public async excluir(codigo: string): Promise<boolean> {
        const result = await fetch(baseURL + "/" + codigo, {
            method: 'DELETE'
        });
        return result.ok;
    }
}