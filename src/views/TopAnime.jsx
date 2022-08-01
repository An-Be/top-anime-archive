import AddToList from '../components/AddToList';
import ViewMoreInfo from '../components/ViewMoreInfo';
import { DataContext } from "../context/DataContext";
import { useContext } from "react";

const AllAnime = () => {

    const { useFetch } = useContext(DataContext);

    const { state } = useFetch(`https://api.jikan.moe/v4/top/anime`);
    console.log(state.apiData);

    return(
        <div className="container">
                {state.loading? <img className="loading" src={require('../loading.webp')} alt='loader' /> 
                : !state.loading && state.error ? <div>{state.error}</div> 
                : state.apiData.map((anime) => {
                    return (
                    <div key={anime.mal_id} className="card-container">
                        <img src={anime.images.jpg.image_url} alt={anime.title} />
                        <h1>{anime.title}</h1>
                        <AddToList />
                        <ViewMoreInfo />
                    </div>
                )})}
        </div>
    );
}
export default AllAnime;