import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { getDocs, collection} from "firebase/firestore";
import { db } from "../firebase.config";

const RndAnimeBtn = () => {
    const { dispatch } = useContext(DataContext)
    const rndNum = Math.floor(Math.random() * 10); 
    const animeCollectionRef = collection(db, 'Anime');  
 
    let trendingAnime = []
  
    useEffect(() => {
      
      dispatch({ type: 'FETCHING'});
      const getAnime = async () => {
        try{
          const data = await getDocs(animeCollectionRef);
          data.docs.map((doc) => 
          {
            return trendingAnime.push({...doc.data(), doc_id: doc.id})
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