import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { getData } from "../actions/Actions";

const SeasonalAnime = () => {
    const { loading, animeSeasonData, error, dispatch } = useContext(DataContext);

    useEffect(() => {
        dispatch({ type: 'FETCHING'})
        const fetchData = async () => {
            try{
                const seasonAnime = await getData(`https://api.jikan.moe/v4/seasons/now`)
                dispatch({ type: 'FETCHED_SEASON_ANIME', payload: seasonAnime})

            }catch(error){
                dispatch({ type: 'FETCH_ERROR'})
            }
        }
        fetchData();
    },[dispatch])

    console.log(animeSeasonData);

    return(
        <>
        <h1 style={{textAlign: 'center', marginTop:'6rem'}}>Current Seasons Anime</h1>
        <div className="container">
        {loading ? (
          <img
            className="loading"
            src={require("../loading.webp")}
            alt="loader"
          />
        ) : !loading && error ? (
          <div>{error}</div>
        ) : (
            animeSeasonData.map((anime) => {
            return (
              <div key={anime.mal_id} className="card-container">
                <img src={anime.images.jpg.image_url} alt={anime.title} />
                <h1>{anime.title}</h1>
                <p>airing from: {anime.aired.prop.from.month}/{anime.aired.prop.from.day}/{anime.aired.prop.from.year} </p>
                <p>airing on: {anime.broadcast.day}</p>
              </div>
            );
          })
        )}
      </div>
      </>
    );
}
export default SeasonalAnime;