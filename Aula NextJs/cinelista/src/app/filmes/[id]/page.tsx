import { filmes } from "@/lib/filmes";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from './DetalhesFilme.module.css';

type Props =  {
    params : Promise<{
        id : number
    }> 
}

const DetalhesFilme = async ({ params } : Props) => {
    const { id } = await params;

    const details = filmes.find(filme => filme.id == id);

    if(!details)
        return notFound();


    const {title, imagem, description} = details;

    return(
        <>
            <div className={styles.detalhes}>
                <div className={styles.detalhes__container}>
                    <Link href="/" className={styles.detalhes__voltar}>Voltar</Link>
                    <section>
                        <figure>
                            <img className={styles.detalhes__image} src={imagem} alt={`Poster do Filme: ${title}`} />
                        </figure>
                        <article className={styles.detalhes__info}>
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </article>
                    </section>
                </div>
            </div>
        </>
    )
}

export default DetalhesFilme;