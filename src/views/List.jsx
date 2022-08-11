import { useState, useEffect } from "react";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import { auth, db } from "../firebase.config";

const List = () => {
    const [ animeList, setAnimeList ] = useState([]);
    const animeListCollectionRef = collection(db, 'Anime_list');
    
    const getAnimeList = async () => {
        try{
            const data = await getDocs(animeListCollectionRef);
            setAnimeList(data.docs.map((doc) => 
            ({...doc.data(), id: doc.id})))
        }catch(error){
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
    }, [])
    
    console.log(animeList)

    return(
        <div className="container" style={{marginTop: '6rem'}}>
            <h1>Anime List</h1>
            {animeList.length < 1 ? <div>No Anime In list</div> : animeList.map((anime) => {
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