import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { getData } from "../actions/Actions";
import { Link } from "react-router-dom";
import { getDocs, doc, collection} from "firebase/firestore";
import { db } from "../firebase.config";

const TopFiveAnime = () => {
    const { loading, error, animeData, dispatch} = useContext(DataContext);

    let trendingAnime = []

    const animeCollectionRef = collection(db, 'Manga');    
  
    useEffect(() => {
      dispatch({ type: 'FETCHING'});
      const getAnime = async () => {
        try{
          const data = await getDocs(animeCollectionRef);
          data.docs.map((doc) => 
          {
            trendingAnime.push({...doc.data(), doc_id: doc.id})
          })
  
          console.log(trendingAnime)
          dispatch({ type: "FETCHED_MANGA", payload: trendingAnime});
      }catch(error){
          console.log('error', error)
      }
      }
      getAnime();
    }, [dispatch])

    return(
        <div className="homeContainer">
            {loading? <img className="loading" src={require('../loading.webp')} alt='loader' /> 
            : !loading && error ? <div>{error}</div> 
            : animeData.slice(0,5).map((anime) => {
                return (
                <div key={anime.id} className="home-card-container">
                      <img src={anime.posterImage.original} alt={anime.canonicalTitle} />
                      <h1 style={{color: 'black'}}>{anime.canonicalTitle}</h1>
                </div>
            )})}
        </div>
    );
}
export default TopFiveAnime;