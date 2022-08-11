import { DataContext } from "../context/DataContext";
import { useContext, useEffect } from "react";
import { getDocs, doc, collection} from "firebase/firestore";
import { db } from "../firebase.config";

const Reccomendation = () => {
    const { loading, error, recData, dispatch } = useContext(DataContext);

    const recCollectionRef = collection(db, 'Reccomendation');    

    let recs = [];

    useEffect(() => {
      dispatch({ type: "FETCHING" });
      const fetchData = async () => {
        try {
          const data = await getDocs(recCollectionRef);
          data.docs.map((doc) => 
          {
            recs.push({...doc.data(), doc_id: doc.id})
          })
          console.log(recs)
          dispatch({ type: "FETCHED_REC", payload: recs });
        } catch (error) {
          dispatch({ type: "FETCH_ERROR" });
          console.log(error)
        }
      };
      fetchData();
    }, [dispatch]);

  
    return (
      <div className="rec-wrapper">
        <h1 className="h1Rec">Anime Reccomendations</h1>
        {loading ? (
          <img
            className="loading"
            src={require("../loading.webp")}
            alt="loader"
          />
        ) : !loading && error ? (
          <div>{error}</div>
        ) : (
          recData.map((rec, index) => {
            return (
              <div key={index}>
              <div className="rec-container">
              <table>
                <tbody>
                <tr>
                  <th>If you Liked...</th>
                  <th>You might like...</th>
                </tr>
                <tr>
                  <td>
                  <img
                      src={rec.entry[0].images.jpg.image_url}
                      alt={rec.entry[0].title}
                      
                    />
                  </td>
                  <td>
                  <img
                      src={rec.entry[1].images.jpg.image_url}
                      alt={rec.entry[1].title}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="title">{rec.entry[0].title}</td>
                  <td className="title">{rec.entry[1].title}</td>
                </tr>
                <tr>
                <td className="content">{rec.content}</td>
                </tr>
                </tbody>
              </table>   
              </div>
            </div>
            );
          })
        )}
      </div>
    );
}
export default Reccomendation;