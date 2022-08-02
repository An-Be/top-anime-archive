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
            : <div key={randomAnimeData.mal_id}>
                <h1>{randomAnimeData.title}</h1>
                <img src={randomAnimeData.images.jpg.image_url} alt={randomAnimeData.title} />
                <p>{randomAnimeData.synopsis}</p>
            </div>
            }
        </div>
    )

}
export default RandomAnime;