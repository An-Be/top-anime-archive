import { useEffect, useContext } from "react";
import { getDocs, collection, doc, deleteDoc, query, where } from "firebase/firestore";
import { auth, db } from "../firebase.config";
import { DataContext } from "../context/DataContext";
import { UserContext } from "../context/UserContext";

const List = () => {
    const animeListCollectionRef = collection(db, 'Anime_list');
    const mangaListCollectionRef = collection(db, 'Manga_list');

    const { loading, error, animeList, dispatch, mangaList } = useContext(DataContext);
    const { displayName } = useContext(UserContext);

console.log(displayName);
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

    const getMangaList = async () => {
        dispatch({ type: 'FETCHING' })
        try{
            const qry = query(mangaListCollectionRef, where('author.id', '==', auth.currentUser.uid))
            const data = await getDocs(qry);
            const manga = []
            data.docs.map((doc) => 
            manga.push({...doc.data(), id: doc.id}))
            dispatch({ type:'FETCHED_MANGA_LIST', payload: manga })
        }catch(error){
            dispatch({ type: 'FETCH_ERROR '})
            console.log('error', error)
        }
        console.log(mangaList)
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

    const deleteManga = async(id) => {
        try{
            const mangaDoc = doc(db, "Manga_list", id)
            await deleteDoc(mangaDoc);
            console.log(id)
            console.log('deleted!')
        }catch(error){
            console.log(error)
        }
        getMangaList();
    }

    useEffect(() => {
        getAnimeList();
        getMangaList();
    }, [dispatch])
    
    console.log(animeList)

    return(
        <div style={{marginTop: '8rem'}}>
            <h1 style={{textAlign: 'center'}}>Hey &#128075; {displayName}, welcome to your list</h1>
            <h2 style={{textAlign: 'center'}}>Anime List</h2>
        <div className="container">
            
            {loading ? (
        <img
          className="loading"
          src={require("../loading.webp")}
          alt="loader"
        />
      ) : !loading && error ? (
        <div>{error}</div>
      ) : animeList.map((anime) => {
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
        <h2 style={{textAlign: 'center'}}>Manga List</h2>
        <div className="container">
            
            {loading ? (
        <img
          className="loading"
          src={require("../loading.webp")}
          alt="loader"
        />
      ) : !loading && error ? (
        <div>{error}</div>
      ) : mangaList.map((manga) => {
                return <div className="card-container" key={manga.id}>
                    <div className="deleteAnime">
                        
                    </div>
                    <img src={manga.img} alt={manga.title}/>
                    <h1>{manga.title}</h1>
                    <p className="animeStatus" style={{
                        backgroundColor: 
                        manga.status === "complete" ? 'lightgreen' :
                        manga.status === 'willRead' ? 'yellow' :
                        manga.status === 'dropped' ? '#ffc6c4' :
                        manga.status === 'reading' ? 'lightblue' : 'white'
                    }}
                    >{manga.status}</p>
                    <button className="deleteBtn" onClick={() => deleteManga(manga.id)}>&#128465;</button>
                </div>
            })}
        </div>
        </div>
    );
}
export default List;