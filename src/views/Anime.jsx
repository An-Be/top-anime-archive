import { useLocation, Link } from "react-router-dom";
import { getData } from '../actions/Actions';
import { useEffect, useContext } from "react";
import { DataContext } from "../context/DataContext";
import { UserContext } from "../context/UserContext";


const Anime = () => {

    const { error, loading, oneAnimeData, dispatch } = useContext(DataContext);
    const { isAuth } = useContext(UserContext);
   
    const location = useLocation();
    const { id } = location.state;

    useEffect(() => {
        dispatch({ type:'FETCHING' })
        const fetchData = async () => {
            try{
                const anime = await getData(`https://kitsu.io/api/edge/anime/${id}`)
                dispatch({ type: 'FETCHED_ONE_ANIME', payload: anime});
            }catch(error){
                dispatch({ type:'FETCH_ERROR' })
            }
        }
        fetchData();
        console.log('I am used once')
    }, [dispatch, id])

    console.log(id);
    console.log('in anime component', oneAnimeData);
    
    return(
        <div>
            {loading ? (
        <img
          className="loading"
          src={require("../loading.webp")}
          alt="loader"
        />
      ) : !loading && error ? (
        <div>{error}</div>
      ) : (
            <div key={oneAnimeData.id} className="card-container">
              <img src={oneAnimeData.attributes.posterImage.original} alt={oneAnimeData.attributes.canonicalTitle} />
              <h1>{oneAnimeData.attributes.canonicalTitle}</h1>
              {isAuth && <Link to='/add-to-list' state={{ id: oneAnimeData.id}}>Add</Link> }
            </div>
            )}
        </div>
    );

}
export default Anime;