import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { getData } from "../actions/Actions";

const RndAnimeBtn = () => {
    const { dispatch } = useContext(DataContext)
    const rndNum = Math.floor(Math.random() * 10);

    useEffect(() => {
        dispatch({ type: 'FETCHING' })
        const fetchData = async () => {
            try{
            const anime = await getData(`https://kitsu.io/api/edge/trending/anime`);
            let rndAnime = anime[rndNum]
            dispatch({ type: 'FETCHED_RANDOM_ANIME', payload: rndAnime })
            }
            catch(error){
                dispatch({ type: "FETCH_ERROR" });
            }
        }
        fetchData();
        console.log('effect is happening')
    }, [dispatch])
    return(
        <Link style={{textDecoration: 'none'}} className="randomAnime" to='/random-anime'>Random Anime</Link>
    );
}
export default RndAnimeBtn;