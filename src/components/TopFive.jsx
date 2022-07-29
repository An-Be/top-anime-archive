//component to render only 5 from each api call

import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Top5Anime = ({ url }) => {
    const { useFetch } = useContext(DataContext);

    const { loading, apiData, serverError } = useFetch(url);

    const fiveItems = apiData.splice(1,5);

    return(
        <div className="container">
            {loading? <img className="loading" src={require('../loading.webp')} alt='loader' /> 
            : !loading && serverError ? <div>Error in fetching data</div> 
            : fiveItems.map((item) => {
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