import AddToList from '../components/AddToList';
import ViewMoreInfo from '../components/ViewMoreInfo';
import { MangaContext } from "../context/MangaContext";
import { useContext, useEffect } from "react";
import { getAllManga } from '../actions/Actions';

const TopManga = () => {

    const { mangaLoading, mangaError, apiMangaData, dispatch } = useContext(MangaContext)
   
    useEffect(() => {
        dispatch({ type: 'FETCHING'})
        const fetchData = async () => {
            try{
                const anime = await getAllManga()
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
                {mangaLoading? <img className="loading" src={require('../loading.webp')} alt='loader' /> 
                : !mangaLoading && mangaError? <div>{mangaError}</div> 
                : apiMangaData.map((manga) => {
                    return (
                    <div key={manga.mal_id} className="card-container">
                        <img src={manga.images.jpg.image_url} alt={manga.title} />
                        <h1>{manga.title}</h1>
                        <AddToList />
                        <ViewMoreInfo />
                    </div>
                )})}
        </div>
    );
}
export default TopManga;