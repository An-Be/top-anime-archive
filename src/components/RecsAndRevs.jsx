import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import { getData } from "../actions/Actions";

const RecsAndRevs = ({ url }) => {

    const { loading, error, data, dispatch} = useContext(DataContext);
    const [topTwo, setTopTwo] = useState([]);

    useEffect(() => {
        dispatch({ type: "FETCHING" });
        const fetchData = async () => {
          try {
            const data = await getData(url);
            dispatch({ type: "FETCHED", payload: data });
            setTopTwo(data)
          } catch (error) {
            dispatch({ type: "FETCH_ERROR" });
          }
        };
        fetchData();
        console.log("i am used once");
    }, [])



    return(
        <div className="rec-wrapper">
        <h1>Manga Reccomendations</h1>
      {loading? <img className="loading" src={require('../loading.webp')} alt='loader' />
      : !loading && error ? <div>{error}</div> 
      : topTwo.slice(0,2).map((item, index) => {
        return (
          <div key={index}>
            <div className="rec-container">
              <div>
                    <h1>If you liked:</h1>
                    <img
                    src={item.entry[0].images.jpg.image_url}
                    alt={item.entry[0].title}
                    />
                    <p>{item.entry[0].title}</p>
                </div>
                <div>
                    <h1>...Then you might like:</h1>
                    <img
                    src={item.entry[1].images.jpg.image_url}
                    alt={item.entry[1].title}
                    />
                    <p>{item.entry[1].title}</p>
                </div>
                <div>
                    <p>{item.content}</p>
                    <p>Anime Rec by: {item.user.username}</p>
                </div>
            </div>
          </div>
        );
      })}
    </div>
    );

}
export default RecsAndRevs;