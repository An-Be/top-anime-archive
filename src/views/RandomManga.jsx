import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const RandomManga = () => {

    const { loading, randomMangaData, error} = useContext(DataContext)

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
            : <div key={randomMangaData.mal_id}>
                <h1>{randomMangaData.title}</h1>
                <img src={randomMangaData.images.jpg.image_url} alt={randomMangaData.title} />
                <p>{randomMangaData.synopsis}</p>
            </div>
            }
        </div>
    )

}
export default RandomManga;