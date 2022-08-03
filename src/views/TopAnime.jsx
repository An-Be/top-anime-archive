import { useContext, useEffect } from "react";
import { getData } from "../actions/Actions";
import AddToList from "../components/AddToList";
import ViewMoreInfo from "../components/ViewMoreInfo";
import { DataContext } from "../context/DataContext";

const AllAnime = () => {
  const { loading, error, animeData, dispatch } = useContext(DataContext);

  useEffect(() => {
    dispatch({ type: "FETCHING" });
    const fetchData = async () => {
      try {
        const allAnime = await getData(`https://kitsu.io/api/edge/trending/anime`);
        dispatch({ type: "FETCHED_ANIME", payload: allAnime });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR" });
      }
    };
    fetchData();
    console.log("i am used once");
  }, []);
  return (
    <div className="container">
      {loading ? (
        <img
          className="loading"
          src={require("../loading.webp")}
          alt="loader"
        />
      ) : !loading && error ? (
        <div>{error}</div>
      ) : (
        animeData.map((anime) => {
          return (
            <div key={anime.id} className="card-container">
              <img src={anime.attributes.posterImage.original} alt={anime.attributes.canonicalTitle} />
              <h1>{anime.attributes.canonicalTitle}</h1>
              <AddToList />
              <ViewMoreInfo />
            </div>
          );
        })
      )}
    </div>
  );
};
export default AllAnime;
