import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { getData } from "../actions/Actions";

const TopFiveAnime = () => {
    const { loading, error, animeData, dispatch} = useContext(DataContext);

    useEffect(() => {
        dispatch({ type: "FETCHING" });
        const fetchData = async () => {
          try {
            const data = await getData(`https://kitsu.io/api/edge/trending/anime?limit=5`);
            dispatch({ type: "FETCHED_ANIME", payload: data });            
          } catch (error) {
            dispatch({ type: "FETCH_ERROR" });
          }
        };
        fetchData();
        console.log("i am used once");
    }, [dispatch])
    return(
        <div className="homeContainer">
            {loading? <img className="loading" src={require('../loading.webp')} alt='loader' /> 
            : !loading && error ? <div>{error}</div> 
            : animeData.map((anime) => {
                return (
                <div key={anime.id} className="home-card-container">
                    <img src={anime.attributes.posterImage.original} alt={anime.attributes.canonicalTitle} />
                    <h1>{anime.attributes.canonicalTitle}</h1>
                </div>
            )})}
        </div>
    );
}
export default TopFiveAnime;