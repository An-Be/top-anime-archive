import { AnimeContext } from '../context/AnimeContext';
import { useContext, useEffect } from "react";
import { getAllAnime } from '../actions/Actions';

const Top5Anime = () => {
    const { animeLoading, animeError, apiAnimeData, dispatch } = useContext(AnimeContext)
   
    useEffect(() => {
        dispatch({ type: 'FETCHING'})
        const fetchData = async () => {
            try{
                const anime = await getAllAnime()
                dispatch({ type: 'FETCHED', payload: anime})    
            }catch(error){
                dispatch({ type: 'FETCH_ERROR'})
            }
        }
        fetchData();
        console.log('i am used once')
    }, [dispatch])

    return(
        <div className="container">
                {animeLoading? <img className="loading" src={require('../loading.webp')} alt='loader' /> 
                : !animeLoading && animeError ? <div>{animeError}</div> 
                : apiAnimeData.slice(0,5).map((anime) => {
                    return (
                    <div key={anime.mal_id} className="card-container">
                        <img src={anime.images.jpg.image_url} alt={anime.title} />
                        <h1>{anime.title}</h1>
                    </div>
                )})}
        </div>
    );
}
export default Top5Anime;