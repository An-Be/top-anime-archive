import { useLocation, useNavigate } from "react-router-dom";
import { getData } from "../actions/Actions";
import { useEffect, useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { auth, db } from '../firebase.config';
import { addDoc, collection } from "firebase/firestore";



const AddToList = () => {
    const [status, setStatus] = useState('')
    let newAnime = {}

    const animeListCollectionRef = collection(db, "Anime_list");

    const navigate = useNavigate();
    const { error, loading, oneAnimeData, dispatch } = useContext(DataContext);
    const location = useLocation();
    const { id } = location.state
    console.log(id);


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

    const handleChange = (event) => {
        event.preventDefault();
        console.log('event', event.target.value)
        setStatus(event.target.value)
        console.log(`${status} = ${event.target.value}`)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('status', status)

        newAnime = {
            anime_id: oneAnimeData.id,
            title: oneAnimeData.attributes.canonicalTitle,
            img: oneAnimeData.attributes.posterImage.original,
            status: status
        }
        console.log(newAnime)
        await addAnimeToList();
        navigate('/list')
    }
    //function to add to db
    const addAnimeToList = async () => {
        await addDoc(animeListCollectionRef, {
            ...newAnime,
            author: {
                name: auth.currentUser.displayName,
                id: auth.currentUser.uid
            }
        });
        //navigate('/list');
    }
    return(
        <div style={{ marginTop: '6rem'}}>
        {/* {loading ? 
            <img
            className="loading"
            src={require("../loading.webp")}
            alt="loader"
            />
        : !loading && error ?
            <div>{error}</div> :
        <div key={oneAnimeData.id}>
            <img src={oneAnimeData.attributes.posterImage.original} width='200px' alt={oneAnimeData.attributes.canonicalTitle}/>
            <h1>{oneAnimeData.attributes.canonicalTitle}</h1>
        </div>
        } */}
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="status">Choose a status:</label>

            <select required name="status" id="status" 
            value={status}
            onChange={handleChange}
            >
            <option disabled={true} value=''>Choose an option...</option>
            <option value='watching'>Watching</option>
            <option value='toWatch'>Will Watch</option>
            <option value='dropped'>Dropped</option>
            <option value='complete'>Completed</option>
            </select>
            <button type='submit'>Add to List</button>
            </form>
        </div>
        </div>
    );
}
export default AddToList;