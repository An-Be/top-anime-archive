import { useContext, useEffect } from "react";
import ViewMoreInfo from "../components/ViewMoreInfo";
import { DataContext } from "../context/DataContext";
import { UserContext } from "../context/UserContext";
import { getDocs, collection} from "firebase/firestore";
import { db } from "../firebase.config";
import { Link } from "react-router-dom";

const TopManga = () => {
  const { loading, error, mangaData, dispatch } = useContext(DataContext);
  const { isAuth } = useContext(UserContext);

  let trendingManga = []

  const mangaCollectionRef = collection(db, 'Manga');    

  useEffect(() => {
    dispatch({ type: 'FETCHING'});
    const getAnime = async () => {
      try{
        const data = await getDocs(mangaCollectionRef);
        data.docs.map((doc) => 
        {
          return trendingManga.push({...doc.data(), doc_id: doc.id})
        })

        console.log(trendingManga)
        dispatch({ type: "FETCHED_MANGA", payload: trendingManga});
    }catch(error){
        console.log('error', error)
    }
    }
    getAnime();
  }, [dispatch])


  return (
    <div className="container">
      {loading ? (
        <img
          className="loading"
          src={require("../loading.webp")}
          alt="loader"
        />
      ) : !loading && error ? (
        <div>{error}</div>
      ) : (
        mangaData.map((manga) => {
          return (
            <div key={manga.id} className="card-container">
              <img src={manga.posterImage.original} alt={manga.canonicalTitle} />
              <h1>{manga.canonicalTitle}</h1>
              {isAuth && <Link to='/add-to-list' state={{ id: manga.id}}>Add</Link> }
              { isAuth && <ViewMoreInfo />}
            </div>
          );
        })
      )}
    </div>
  );
};
export default TopManga;
