import { Livro } from "@/classes/modelo/Livro";
import { NextPage } from "next"
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'
import { Menu } from "../componentes/Menu";
import { LinhaLivro } from "@/componentes/LinhaLivro";
import { ControleLivro } from "@/classes/controle/ControleLivro";

const LivroLista: NextPage = () => {
    const controleLivro = new ControleLivro();
    const [livros, setLivros] = useState(new Array<Livro>());
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        controleLivro.obterLivros().then(result => {
            setLivros(result)
            setCarregado(true);
        })
    }, [carregado]);

    const excluir = (codigo: string) => {
        controleLivro.excluir(codigo).then(result => {
            setCarregado(false);
        })
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Loja Next</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Menu></Menu>
            <main>
                <h1>Catálogo de Livros</h1>
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th>Título</th>
                            <th>Resumo</th>
                            <th>Editora</th>
                            <th>Autores</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carregado && livros.map(x => LinhaLivro(x, () => { excluir(x._id) }))}
                    </tbody>
                </table>
            </main>
        </div>)
}

export default LivroLista;