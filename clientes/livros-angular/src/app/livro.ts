export class Livro{
    _id: string | null;
	codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];

    constructor(_id: string, codEditora: number, titulo: string,  resumo: string, autores: string[]){
        this._id = null;
		this.codEditora = codEditora;
        this.titulo = titulo;
        this.resumo = resumo;
        this.autores = autores;
	}
}