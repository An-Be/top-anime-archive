import { DataContext } from "../context/DataContext";
import { useContext, useEffect } from "react";
import { getData } from "../actions/Actions";

const MangaRec = () => {
  const { loading, error, data, dispatch } = useContext(DataContext);

  useEffect(() => {
    dispatch({ type: "FETCHING" });
    const fetchData = async () => {
      try {
        const mangaRec = await getData(
          `https://api.jikan.moe/v4/recommendations/manga`
        );
        dispatch({ type: "FETCHED", payload: mangaRec });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR" });
      }
    };
    fetchData();
    console.log("i am used once");
  }, []);

  return (
    <div className="rec-wrapper">
      <h1>Manga Reccomendations</h1>
      {loading ? (
        <img
          className="loading"
          src={require("../loading.webp")}
          alt="loader"
        />
      ) : !loading && error ? (
        <div>{error}</div>
      ) : (
        data.map((rec, index) => {
          return (
            <div key={index}>
              <div className="rec-container">
                <div>
                  <h1>If you liked:</h1>
                  <img
                    src={rec.entry[0].images.jpg.image_url}
                    alt={rec.entry[0].title}
                  />
                  <p>{rec.entry[0].title}</p>
                </div>
                <div>
                  <h1>...Then you might like:</h1>
                  <img
                    src={rec.entry[1].images.jpg.image_url}
                    alt={rec.entry[1].title}
                  />
                  <p>{rec.entry[1].title}</p>
                </div>
                <div>
                  <p>{rec.content}</p>
                  <p>Anime Rec by: {rec.user.username}</p>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
export default MangaRec;
