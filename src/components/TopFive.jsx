//component to render only 5 from each api call

import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const TopFive = ({ type }) => {
    const { useFetch } = useContext(DataContext);

    const { state } = useFetch(`https://api.jikan.moe/v4/top/${type}`);

    // let top5Anime = [];
    // let top5Manga = []

    // if(type === 'anime'){
    //     top5Anime = state.apiData
    // }
    // if(type === 'manga'){
    //     top5Manga = state.apiData
    // }

    return(
        <div className="container">
            {state.loading? <img className="loading" src={require('../loading.webp')} alt='loader' /> 
            : !state.loading && state.error ? <div>{state.error}</div> 
            : state.apiData.slice(0,5).map((item) => {
                return (
                <div key={item.mal_id} className="card-container">
                    <img src={item.images.jpg.image_url} alt={item.title} />
                    <h1>{item.title}</h1>
                </div>
            )})}
        </div>
    );
}
export default TopFive;