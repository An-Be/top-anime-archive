import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { auth, db } from '../firebase.config';
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";


const AddToMangaList = () => {
    const [status, setStatus] = useState('')
    let newManga = {}

    const mangaListCollectionRef = collection(db, "Manga_list");
    const mangaCollectionRef = collection(db, 'Manga');

    const navigate = useNavigate();
    const {oneMangaData, dispatch} = useContext(DataContext);
    const location = useLocation();
    const { id } = location.state
    console.log(id);


    useEffect(() => {
        dispatch({ type:'FETCHING' })
        const fetchData = async () => {
            try{
                const qry = query(mangaCollectionRef, where('id', '==', id));
                const data = await getDocs(qry);
                const manga = [];
                data.docs.map((doc) => 
                manga.push({...doc.data(), id: doc.id}))
                dispatch({ type: 'FETCHED_ONE_MANGA', payload: manga});
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

        newManga = {
            manga_id: oneMangaData[0].id,
            title: oneMangaData[0].canonicalTitle,
            img: oneMangaData[0].posterImage.original,
            status: status
        }
        await addMangaToList();
        navigate('/list')
    }
    //function to add to db
    const addMangaToList = async () => {
        await addDoc(mangaListCollectionRef, {
            ...newManga,
            author: {
                name: auth.currentUser.displayName,
                id: auth.currentUser.uid
            }
        });
    }
    console.log(oneMangaData[0].posterImage.original)
    return(
        <div style={{ marginTop: '6rem'}}>
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="status">Choose a status:</label>

            <select required name="status" id="status" 
            value={status}
            onChange={handleChange}
            >
            <option disabled={true} value=''>Choose an option...</option>
            <option value='reading'>Reading</option>
            <option value='willRead'>Will Read</option>
            <option value='dropped'>Dropped</option>
            <option value='complete'>Completed</option>
            </select>
            <button type='submit'>Add to List</button>
            </form>
        </div>
        </div>
    );
}
export default AddToMangaList;