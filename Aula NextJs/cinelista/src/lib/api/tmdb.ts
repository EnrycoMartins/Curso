import { Filme } from "@/types/types"
import tmdbApi from "./axios"

type Data = {
    results : Filme[]
}

export const getTrendindMovies = async () => {
    
    const res = await tmdbApi.get<Data>("/trending/movie/week?language=pt-BR")
    
    return res.data.results;
}