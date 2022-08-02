import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { getData } from "../actions/Actions";

const RndAnimeBtn = () => {
    const { dispatch } = useContext(DataContext)

    useEffect(() => {
        dispatch({ type: 'FETCHING' })
        const fetchData = async () => {
            try{
            const anime = await getData(`https://api.jikan.moe/v4/random/anime?sfw`);
            dispatch({ type: 'FETCHED_RANDOM_ANIME', payload: anime })
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