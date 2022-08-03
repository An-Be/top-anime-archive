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
                <h1>{randomMangaData.attributes.canonicalTitle}</h1>
                <img src={randomMangaData.attributes.posterImage.original} alt={randomMangaData.attributes.canonicalTitle} />
                <p>{randomMangaData.attributes.synopsis}</p>
            </div>
            }
        </div>
    )

}
export default RandomManga;