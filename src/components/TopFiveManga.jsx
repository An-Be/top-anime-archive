import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { getDocs, doc, collection} from "firebase/firestore";
import { db } from "../firebase.config";

const TopFiveManga = () => {
    const { loading, error, mangaData, dispatch} = useContext(DataContext);
    const mangaCollectionRef = collection(db, 'Manga');    

    let trendingManga = [];

    useEffect(() => {
      dispatch({ type: 'FETCHING'});
      const getAnime = async () => {
        try{
          const data = await getDocs(mangaCollectionRef);
          data.docs.map((doc) => 
          {
            trendingManga.push({...doc.data(), doc_id: doc.id})
          })
  
          dispatch({ type: "FETCHED_MANGA", payload: trendingManga});
      }catch(error){
        dispatch({ type: "FETCH_ERROR" });
          console.log('error', error)
      }
      }
      getAnime();
    }, [dispatch])

    return(
        <div className="homeContainer">
            {loading? <img className="loading" src={require('../loading.webp')} alt='loader' /> 
            : !loading && error ? <div>{error}</div> 
            : mangaData.map((manga) => {
                return (
                <div key={manga.id} className="home-card-container">
                    <img src={manga.posterImage.original} alt={manga.canonicalTitle} />
                    <h1>{manga.canonicalTitle}</h1>
                </div>
            )})}
        </div>
    );
}
export default TopFiveManga;