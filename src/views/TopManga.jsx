import { useContext, useEffect } from "react";
import { getData } from '../actions/Actions';
import AddToList from '../components/AddToList';
import ViewMoreInfo from '../components/ViewMoreInfo';
import { DataContext } from "../context/DataContext";

const AllAnime = () => {

    const { loading, error, data, dispatch } = useContext(DataContext);

    useEffect(() => {
    dispatch({ type: "FETCHING" });
    const fetchData = async () => {
      try {
        const allManga = await getData(`https://api.jikan.moe/v4/top/manga`);;
        dispatch({ type: "FETCHED", payload: allManga });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR" });
      }
    };
    fetchData();
    console.log("i am used once");
    console.log(data)
    }, [])

    return(
        <div className="container">
                {loading? <img className="loading" src={require('../loading.webp')} alt='loader' /> 
                : !loading && error? <div>{error}</div> 
                : data.map((manga) => {
                    return (
                    <div key={manga.mal_id} className="card-container">
                        <img src={manga.images.jpg.image_url} alt={manga.title} />
                        <h1>{manga.title}</h1>
                        <AddToList />
                        <ViewMoreInfo />
                    </div>
                )})}
        </div>
    );
}
export default AllAnime;