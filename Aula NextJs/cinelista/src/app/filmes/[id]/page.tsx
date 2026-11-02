import Link from "next/link";
import { notFound } from "next/navigation";
import styles from './DetalhesFilme.module.css';
import { getMoviesDetails } from "@/lib/api/tmdb";

type Props =  {
    params : Promise<{
        id : number
    }> 
}

export const generateMetadata = async({ params}: Props) => {

    const { id } = await params;
    //fazer a chamada da API
    const details = await getMoviesDetails(id);

    if(!details)
        return;

    return {
        title: `${details.title} | Cinelista`,
        description: details.overview,
        openGraph: {
            title: `${details.title} | Cinelista`,
            description: details.overview,
            images: [`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${details.poster_path}`]
        }
    }

}

const DetalhesFilme = async ({ params } : Props) => {
    const { id } = await params;
    //fazer a chamada da API
    const details = await getMoviesDetails(id);

    if(!details)
        return notFound();


    const {title, poster_path, overview} = details;

    return(
        <>
            <div className={styles.detalhes}>
                <div className={styles.detalhes__container}>
                    <Link href="/" className={styles.detalhes__voltar}>Voltar</Link>
                    <section>
                        <figure>
                            <img className={styles.detalhes__image} 
                            src={`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}`}
                            alt={`Poster do Filme: ${title}`} />
                        </figure>
                        <article className={styles.detalhes__info}>
                            <h2>{title}</h2>
                            <p>{overview}</p>
                        </article>
                    </section>
                </div>
            </div>
        </>
    )
}

export default DetalhesFilme;