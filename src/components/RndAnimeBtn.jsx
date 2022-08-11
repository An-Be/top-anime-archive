import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { getDocs, doc, collection} from "firebase/firestore";
import { db } from "../firebase.config";

const RndAnimeBtn = () => {
    const { dispatch } = useContext(DataContext)
    const rndNum = Math.floor(Math.random() * 10);

    let trendingAnime = []

    const animeCollectionRef = collection(db, 'Anime');    
  
    useEffect(() => {
      dispatch({ type: 'FETCHING'});
      const getAnime = async () => {
        try{
          const data = await getDocs(animeCollectionRef);
          data.docs.map((doc) => 
          {
            trendingAnime.push({...doc.data(), doc_id: doc.id})
          })
          let rndAnime = trendingAnime[rndNum]
          dispatch({ type: "FETCHED_RANDOM_ANIME", payload: rndAnime});
      }catch(error){
          console.log('error', error)
      }
      }
      getAnime();
    }, [dispatch])
    return(
        <Link style={{textDecoration: 'none'}} className="randomAnime" to='/random-anime'>Random Anime</Link>
    );
}
export default RndAnimeBtn;