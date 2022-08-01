import AddToList from '../components/AddToList';
import ViewMoreInfo from '../components/ViewMoreInfo';
import { DataContext } from "../context/DataContext";
import { useContext } from "react";

const TopManga = () => {

    const { useFetch } = useContext(DataContext);

    const { state } = useFetch('https://api.jikan.moe/v4/top/manga');

    return(
        <div className="container">
                {state.loading? <img className="loading" src={require('../loading.webp')} alt='loader' /> 
                : !state.loading && state.error ? <div>{state.error}</div> 
                : state.apiData.map((manga) => {
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