// import { getData } from "../actions/Actions";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const RandomAnime = () => {

    const { loading, randomAnimeData, error} = useContext(DataContext)

    return(
        <div className='rnd-container' style={{marginTop: '6rem'}}>
            {loading ? 
                <img
                className="loading"
                src={require("../loading.webp")}
                alt="loader"
              />
              : !loading && error ?
                <div>{error}</div>
            : <div className="rnd-card-container" key={randomAnimeData.id}>
                <h1>{randomAnimeData.canonicalTitle}</h1>
                <div className="detailsImgWrapper">
                    <img src={randomAnimeData.posterImage.original} alt={randomAnimeData.canonicalTitle} />
                    <div className="detailsWrapper">
                    <p className= 'details' id='rating'>Rating: {randomAnimeData.ageRating}</p>
                    <p className= 'details' id='ratingRank'>Rating Rank: {randomAnimeData.ratingRank}</p>
                    <p className= 'details' id='popRating'>Popularity Rank: {randomAnimeData.popularityRank}</p>
                    <p className= 'details' id='status'>Status: {randomAnimeData.status}</p>
                    <p className= 'details' id='episodes'>Number of episodes: {randomAnimeData.episodeCoun}</p>
                    </div>
                </div>
                <p className="synopsis">{randomAnimeData.synopsis}</p>
            </div>
            }
        </div>
    )

}
export default RandomAnime;