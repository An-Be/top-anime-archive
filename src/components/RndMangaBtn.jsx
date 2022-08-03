import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { getData } from "../actions/Actions";

const RndMangaBtn = () => {
    const { dispatch } = useContext(DataContext)
    const rndNum = Math.floor(Math.random() * 10);


    useEffect(() => {
        dispatch({ type: 'FETCHING' })
        const fetchData = async () => {
            try{
            const manga = await getData(`https://kitsu.io/api/edge/trending/manga`);
            let rndManga = manga[rndNum]
            dispatch({ type: 'FETCHED_RANDOM_MANGA', payload: rndManga })
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