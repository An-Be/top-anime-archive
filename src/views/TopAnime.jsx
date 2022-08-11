import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import { getDocs, collection} from "firebase/firestore";
import { db } from "../firebase.config";

const TopAnime = () => {
  const { loading, error, animeData, dispatch } = useContext(DataContext);
  const { isAuth } = useContext(UserContext);
  let trendingAnime = []

  const animeCollectionRef = collection(db, 'Anime');    

  useEffect(() => {
    dispatch({ type: 'FETCHING'});
    const getAnime = async () => {
      try{
        const data = await getDocs(animeCollectionRef);
        data.docs.map((doc) => 
        {

          return trendingAnime.push({...doc.data(), doc_id: doc.id})
        })

        dispatch({ type: "FETCHED_ANIME", payload: trendingAnime});
    }catch(error){
        console.log('error', error)
    }
    }
    getAnime();
  }, [dispatch])




  return (
    <div style={{marginTop: '7rem'}} className="container">
      {loading ? (
        <img
          className="loading"
          src={require("../loading.webp")}
          alt="loader"
        />
      ) : !loading && error ? (
        <div>{error}</div>
      ) : (
        animeData.map((anime) => {
          return (
            <div key={anime.id} className="card-container">
              <img className="posterImage" src={anime.posterImage.original} alt={anime.canonicalTitle} />
              <h1>{anime.canonicalTitle}</h1>
              {isAuth && <Link className="addBtn" to='/add-to-anime-list' state={{ id: anime.id}}>Add</Link> }
            </div>
          );
        })
      )}
    </div>
  );
};
export default TopAnime;
