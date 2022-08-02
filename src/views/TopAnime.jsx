import { useContext, useEffect } from "react";
import { getData } from "../actions/Actions";
import AddToList from "../components/AddToList";
import ViewMoreInfo from "../components/ViewMoreInfo";
import { DataContext } from "../context/DataContext";

const AllAnime = () => {
  const { loading, error, data, dispatch } = useContext(DataContext);

  useEffect(() => {
    dispatch({ type: "FETCHING" });
    const fetchData = async () => {
      try {
        const allAnime = await getData(`https://api.jikan.moe/v4/top/anime`);
        dispatch({ type: "FETCHED", payload: allAnime });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR" });
      }
    };
    fetchData();
    console.log("i am used once");
    console.log(data);
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
        data.map((anime) => {
          return (
            <div key={anime.mal_id} className="card-container">
              <img src={anime.images.jpg.image_url} alt={anime.title} />
              <h1>{anime.title}</h1>
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
