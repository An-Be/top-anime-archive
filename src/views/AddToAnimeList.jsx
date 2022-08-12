import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { auth, db } from '../firebase.config';
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";



const AddToAnimeList = () => {
    const [status, setStatus] = useState('')
    let newAnime = {}

    const animeListCollectionRef = collection(db, "Anime_list");
    const animeCollectionRef = collection(db, 'Anime');

    const navigate = useNavigate();
    const {oneAnimeData, dispatch} = useContext(DataContext);
    const location = useLocation();
    const { id } = location.state
    console.log(id);


    useEffect(() => {
        dispatch({ type:'FETCHING' })
        const fetchData = async () => {
            try{
                const qry = query(animeCollectionRef, where('id', '==', id));
                const data = await getDocs(qry);
                const anime = [];
                data.docs.map((doc) => 
                anime.push({...doc.data(), id: doc.id}))
                dispatch({ type: 'FETCHED_ONE_ANIME', payload: anime});
            }catch(error){
                dispatch({ type:'FETCH_ERROR' })
            }
        }
        fetchData();
        console.log('I am used once')
    }, [dispatch])

    const handleChange = (event) => {
        event.preventDefault();
        setStatus(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('status', status)

        newAnime = {
            anime_id: oneAnimeData[0].id,
            title: oneAnimeData[0].canonicalTitle,
            img: oneAnimeData[0].posterImage.original,
            status: status
        }
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
    }
    return(
        <div className="form-container" style={{ marginTop: '6rem'}}>
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
    );
}
export default AddToAnimeList;