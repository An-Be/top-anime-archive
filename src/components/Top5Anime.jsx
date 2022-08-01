import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Top5Anime = () => {
    const { useFetch } = useContext(DataContext);

    
    const { state } = useFetch(`https://api.jikan.moe/v4/top/anime`);
    console.log(state.apiData)


    return(
        <div className="container">
            {state.loading? <img className="loading" src={require('../loading.webp')} alt='loader' /> 
            : !state.loading && state.error ? <div>{state.error}</div> 
            : state.apiData.slice(1,5).map((item) => {
                return (
                <div key={item.mal_id} className="card-container">
                    <img src={item.images.jpg.image_url} alt={item.title} />
                    <h1>{item.title}</h1>
                </div>
            )})}
        </div>
    );
}
export default Top5Anime;