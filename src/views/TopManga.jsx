import { useContext, useEffect } from "react";
import { getData } from "../actions/Actions";
import AddToList from "../components/AddToList";
import ViewMoreInfo from "../components/ViewMoreInfo";
import { DataContext } from "../context/DataContext";

const AllManga = () => {
  const { loading, error, mangaData, dispatch } = useContext(DataContext);

  useEffect(() => {
    dispatch({ type: "FETCHING" });
    const fetchData = async () => {
      try {
        const allManga = await getData(`https://kitsu.io/api/edge/trending/manga`);
        dispatch({ type: "FETCHED_MANGA", payload: allManga });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR" });
      }
    };
    fetchData();
    console.log("i am used once");
    console.log(mangaData);
  }, [dispatch]);

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
        mangaData.map((manga) => {
          return (
            <div key={manga.id} className="card-container">
              <img src={manga.attributes.posterImage.original} alt={manga.attributes.canonicalTitle} />
              <h1>{manga.attributes.canonicalTitle}</h1>
              <AddToList />
              <ViewMoreInfo />
            </div>
          );
        })
      )}
    </div>
  );
};
export default AllManga;
