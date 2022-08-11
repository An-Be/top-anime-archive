import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const RandomManga = () => {

    const { loading, randomMangaData, error} = useContext(DataContext)

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
            : <div className="rnd-card-container" key={randomMangaData.id}>
                <h1>{randomMangaData.canonicalTitle}</h1>
                <div className="detailsImgWrapper">
                    <img src={randomMangaData.posterImage.original} alt={randomMangaData.canonicalTitle} />
                    <div className="detailsWrapper">
                    <p className= 'details' id='rating'>Rating: {randomMangaData.ageRating}</p>
                    <p className= 'details' id='ratingRank'>Rating Rank: {randomMangaData.ratingRank}</p>
                    <p className= 'details' id='popRating'>Popularity Rank: {randomMangaData.popularityRank}</p>
                    <p className= 'details' id='status'>Subtype: {randomMangaData.subtype}</p>
                    <p className= 'details' id='episodes'>Start Date: {randomMangaData.startDate}</p>
                    </div>
                </div>
                <p className="synopsis">{randomMangaData.synopsis}</p>
            </div>
            }
        </div>
    )

}
export default RandomManga;