import { useEffect, useContext } from "react";
import { getDocs, collection, doc, deleteDoc, query, where } from "firebase/firestore";
import { auth, db } from "../firebase.config";
import { DataContext } from "../context/DataContext";

const List = () => {
    const animeListCollectionRef = collection(db, 'Anime_list');
    const { loading, error, animeList, dispatch } = useContext(DataContext);

    const getAnimeList = async () => {
        dispatch({ type: 'FETCHING' })
        try{
            const qry = query(animeListCollectionRef, where('author.id', '==', auth.currentUser.uid))
            const data = await getDocs(qry);
            const anime = []
            data.docs.map((doc) => 
            anime.push({...doc.data(), id: doc.id}))
            dispatch({ type:'FETCHED_ANIME_LIST', payload: anime })
        }catch(error){
            dispatch({ type: 'FETCH_ERROR '})
            console.log('error', error)
        }
    }

    
    const deleteAnime = async(id) => {
        try{
            const animeDoc = doc(db, "Anime_list", id)
            await deleteDoc(animeDoc);
            console.log(id)
            console.log('deleted!')
        }catch(error){
            console.log(error)
        }
        getAnimeList();
    }

    useEffect(() => {
        getAnimeList();
    }, [dispatch])
    
    console.log(animeList)

    return(
        <div className="container" style={{marginTop: '6rem'}}>
            <h1>Anime List</h1>
            {loading ? (
        <img
          className="loading"
          src={require("../loading.webp")}
          alt="loader"
        />
      ) : !loading && error ? (
        <div>{error}</div>
      ) : animeList.map((anime) => {
                if(auth.currentUser.uid === anime.author.id)
                return <div className="card-container" key={anime.id}>
                    <div className="deleteAnime">
                        
                    </div>
                    <img src={anime.img} alt={anime.title}/>
                    <h1>{anime.title}</h1>
                    <p className="animeStatus" style={{
                        backgroundColor: 
                        anime.status === "complete" ? 'lightgreen' :
                        anime.status === 'toWatch' ? 'yellow' :
                        anime.status === 'dropped' ? '#ffc6c4' :
                        anime.status === 'watching' ? 'lightblue' : 'white'
                    }}
                    >{anime.status}</p>
                    <button className="deleteBtn" onClick={() => deleteAnime(anime.id)}>&#128465;</button>
                </div>
            })}
        </div>
    );
}
export default List;