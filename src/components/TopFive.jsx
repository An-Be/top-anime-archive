import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import { getData } from "../actions/Actions";

const TopFive = ({ url }) => {
    const { loading, error, data, dispatch} = useContext(DataContext);
    const [topFive, setTopFive] = useState([]);

    useEffect(() => {
        dispatch({ type: "FETCHING" });
        const fetchData = async () => {
          try {
            const data = await getData(url);
            dispatch({ type: "FETCHED", payload: data });
            setTopFive(data)
          } catch (error) {
            dispatch({ type: "FETCH_ERROR" });
          }
        };
        fetchData();
        console.log("i am used once");
    }, [])



    return(
        <div className="homeContainer">
            {loading? <img className="loading" src={require('../loading.webp')} alt='loader' /> 
            : !loading && error ? <div>{error}</div> 
            : topFive.slice(0,5).map((item) => {
                return (
                <div key={item.mal_id} className="home-card-container">
                    <img src={item.images.jpg.image_url} alt={item.title} />
                    <h1>{item.title}</h1>
                </div>
            )})}
        </div>
    );
}
export default TopFive;