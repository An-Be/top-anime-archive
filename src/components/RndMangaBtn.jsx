import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { getDocs, collection} from "firebase/firestore";
import { db } from "../firebase.config";

const RndMangaBtn = () => {
    const { dispatch } = useContext(DataContext)
    const rndNum = Math.floor(Math.random() * 10); 
    const mangaCollectionRef = collection(db, 'Manga'); 
    let trendingManga = []

  
    useEffect(() => {
      dispatch({ type: 'FETCHING'});
      const getAnime = async () => {
        try{
          const data = await getDocs(mangaCollectionRef);
          data.docs.map((doc) => 
          {
            return trendingManga.push({...doc.data(), doc_id: doc.id})
          })
          let rndManga = trendingManga[rndNum]
          dispatch({ type: "FETCHED_RANDOM_MANGA", payload: rndManga});
      }catch(error){
          console.log('error', error)
      }
      }
      getAnime();
    }, [dispatch])

    return(
        <Link style={{textDecoration: 'none'}} className="randomManga" to='/random-manga'>Random Manga</Link>
    );
}
export default RndMangaBtn;