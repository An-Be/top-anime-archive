import { DataContext } from "../context/DataContext";
import { useContext, useEffect } from "react";
import { getData } from "../actions/Actions";

const TwoAnimeRec = () => {
    const { loading, error, animeRecData, dispatch } = useContext(DataContext);

    useEffect(() => {
      dispatch({ type: "FETCHING" });
      const fetchData = async () => {
        try {
          const animeRec = await getData(
            `https://api.jikan.moe/v4/recommendations/anime`
          );
          dispatch({ type: "FETCHED_ANIME_REC", payload: animeRec });
        } catch (error) {
          dispatch({ type: "FETCH_ERROR" });
        }
      };
      fetchData();
      console.log(animeRecData)
      console.log("i am used once");
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
          animeRecData.slice(0,1).map((rec, index) => {
            return (
              <div key={index}>
              <div className="rec-container">
              <table>
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
              </table>   
              </div>
            </div>
            );
          })
        )}
      </div>
    );
}
export default TwoAnimeRec;