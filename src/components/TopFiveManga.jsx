import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { getData } from "../actions/Actions";

const TopFiveManga = () => {
    const { loading, error, mangaData, dispatch} = useContext(DataContext);

    useEffect(() => {
        dispatch({ type: "FETCHING" });
        const fetchData = async () => {
          try {
            const data = await getData(`https://kitsu.io/api/edge/trending/manga?limit=5`);
            dispatch({ type: "FETCHED_MANGA", payload: data });            
          } catch (error) {
            dispatch({ type: "FETCH_ERROR" });
          }
        };
        fetchData();
        console.log("i am used once");
        console.log(mangaData)
    }, [])
    return(
        <div className="homeContainer">
            {loading? <img className="loading" src={require('../loading.webp')} alt='loader' /> 
            : !loading && error ? <div>{error}</div> 
            : mangaData.map((manga) => {
                return (
                <div key={manga.id} className="home-card-container">
                    <img src={manga.attributes.posterImage.original} alt={manga.attributes.canonicalTitle} />
                    <h1>{manga.attributes.canonicalTitle}</h1>
                </div>
            )})}
        </div>
    );
}
export default TopFiveManga;