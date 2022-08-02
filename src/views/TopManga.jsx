import useFetch from '../components/useFetch';
import AddToList from '../components/AddToList';

const TopManga = () => {

    const { loading, serverError, apiData } = useFetch('https://api.jikan.moe/v4/top/manga');

    return(
        <div className="container">
                {loading? <img className="loading" src={require('../loading.webp')} /> 
                : !loading && serverError ? <div>Error in fetching data</div> 
                : apiData.map((manga) => {
                    return (
                    <div key={manga.mal_id} className="card-container">
                        <img src={manga.images.jpg.image_url} alt={manga.title} />
                        <h1>{manga.title}</h1>
                        <AddToList />
                    </div>
                )})}
        </div>
    );
}
export default TopManga;