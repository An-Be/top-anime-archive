// import { getData } from "../actions/Actions";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const RandomAnime = () => {

    const { loading, randomAnimeData, error} = useContext(DataContext)

    return(
        <div style={{marginTop: '6rem'}}>
            {loading ? 
                <img
                className="loading"
                src={require("../loading.webp")}
                alt="loader"
              />
              : !loading && error ?
                <div>{error}</div>
            : <div key={randomAnimeData.id}>
                <h1>{randomAnimeData.attributes.canonicalTitle}</h1>
                <img src={randomAnimeData.attributes.posterImage.original} alt={randomAnimeData.attributes.canonicalTitle} />
                <p>{randomAnimeData.attributes.synopsis}</p>
            </div>
            }
        </div>
    )

}
export default RandomAnime;