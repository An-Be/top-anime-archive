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
            : <div key={randomMangaData.id}>
                <h1>{randomMangaData.canonicalTitle}</h1>
                <img src={randomMangaData.posterImage.original} alt={randomMangaData.canonicalTitle} />
                <p>{randomMangaData.synopsis}</p>
            </div>
            }
        </div>
    )

}
export default RandomManga;