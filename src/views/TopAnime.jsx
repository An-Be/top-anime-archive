import useFetch from '../components/useFetch';
import AddToList from '../components/AddToList';

const AllAnime = () => {

    const { loading, serverError, apiData } = useFetch('https://api.jikan.moe/v4/top/anime');

    return(
        <div className="container">
                {loading? <img className="loading" src={require('../loading.webp')} /> 
                : !loading && serverError ? <div>Error in fetching data</div> 
                : apiData.map((anime) => {
                    return (
                    <div key={anime.mal_id} className="card-container">
                        <img src={anime.images.jpg.image_url} alt={anime.title} />
                        <h1>{anime.title}</h1>
                        <AddToList />
                    </div>
                )})}
        </div>
    );
}
export default AllAnime;