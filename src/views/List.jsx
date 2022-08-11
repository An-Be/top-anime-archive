import { useState, useEffect } from "react";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import { auth, db } from "../firebase.config";

const List = () => {
    const [ animeList, setAnimeList ] = useState([]);
    const animeListCollectionRef = collection(db, 'Anime_list');    

    useEffect(() => {
        const getAnimeList = async () => {
            try{
                const data = await getDocs(animeListCollectionRef);
                setAnimeList(data.docs.map((doc) => 
                ({...doc.data(), id: doc.id})))
            }catch(error){
                console.log('error', error)
            }

        }
        getAnimeList();
    }, [])
    const deleteAnime = async(id) => {
        try{
        const animeDoc = doc(db, "Anime_list", id)
        await deleteDoc(animeDoc);
        }catch(error){
            console.log(error)
        }
    }

    return(
        <div className="container" style={{marginTop: '6rem'}}>
            {animeList.map((anime) => {
                if(auth.currentUser.uid === anime.author.id)
                return <div className="card-container" key={anime.anime_id}>
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
                    <button className="deleteBtn" onClick={() => deleteAnime(anime.anime_id)}>&#128465;</button>
                </div>
            })}
        </div>
    );
}
export default List;