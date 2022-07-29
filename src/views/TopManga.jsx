import AddToList from '../components/AddToList';
import ViewMoreInfo from '../components/ViewMoreInfo';
import { DataContext } from "../context/DataContext";
import { useContext } from "react";

const TopManga = () => {

    const { useFetch } = useContext(DataContext);

    const { loading, apiData, serverError } = useFetch('https://api.jikan.moe/v4/top/manga');

    return(
        <div className="container">
                {loading? <img className="loading" src={require('../loading.webp')} alt='loader' /> 
                : !loading && serverError ? <div>Error in fetching data</div> 
                : apiData.map((manga) => {
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