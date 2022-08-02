import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { getData } from "../actions/Actions";

const RndMangaBtn = () => {
    const { dispatch } = useContext(DataContext)

    useEffect(() => {
        dispatch({ type: 'FETCHING' })
        const fetchData = async () => {
            try{
            const manga = await getData(`https://api.jikan.moe/v4/random/manga?sfw`);
            dispatch({ type: 'FETCHED_RANDOM_MANGA', payload: manga })
            }
            catch(error){
                dispatch({ type: "FETCH_ERROR" });
            }
        }
        fetchData();
        console.log('effect is happening')
    }, [dispatch])

    return(
        <Link style={{textDecoration: 'none'}} className="randomManga" to='/random-manga'>Random Manga</Link>
    );
}
export default RndMangaBtn;