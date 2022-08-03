import { DataContext } from "../context/DataContext";
import { useContext, useEffect } from "react";
import { getData } from "../actions/Actions";

const AnimeRev = () => {
  const { loading, error, animeRevData, dispatch } = useContext(DataContext);

  useEffect(() => {
    dispatch({ type: "FETCHING" });
    const fetchData = async () => {
      try {
        const animeRev = await getData(
          `https://api.jikan.moe/v4/reviews/anime`
        );
        dispatch({ type: "FETCHED_ANIME_REV", payload: animeRev });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR" });
      }
    };
    fetchData();
    console.log(animeRevData)
    console.log("i am used once");
  }, [dispatch]);

  return (
    <div className="rec-wrapper">
      <h1>Anime Reviews</h1>
      {loading ? (
        <img
          className="loading"
          src={require("../loading.webp")}
          alt="loader"
        />
      ) : !loading && error ? (
        <div>{error}</div>
      ) : (
        animeRevData.map((rec, index) => {
          return (
            <div key={index}>
              <div className="rec-container">
                <h1>{rec.entry.title}</h1>  
                <p>By: {rec.user.username}</p>
                <img src={rec.entry.images.jpg.image_url} alt={rec.entry.title} />
                <p>{rec.review}</p>
                <p>Stats</p>
                <p>Episodes Watched: {rec.episodes_watched}</p>
                <p>Overall: {rec.scores.overall}</p>
                <p>Animation: {rec.scores.animation}</p>
                <p>Character: {rec.scores.character}</p>
                <p>Sound: {rec.scores.sound}</p>
                <p>Story: {rec.scores.story}</p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
export default AnimeRev;
