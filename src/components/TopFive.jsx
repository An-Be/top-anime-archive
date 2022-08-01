//component to render only 5 from each api call

// import { useContex, useEffect } from "react";
// import { AnimeContext } from "../context/AnimeContext";
// import { MangaContext } from "../context/MangaContext";

// const TopFive = ({ type }) => {
//     const { animeLoading, animeError, apiAnimeData, } = useContext(DataContext, MangaContext);



//     return(
//         <div className="container">
//             {state.loading? <img className="loading" src={require('../loading.webp')} alt='loader' /> 
//             : !state.loading && state.error ? <div>{state.error}</div> 
//             : state.apiData.slice(0,5).map((item) => {
//                 return (
//                 <div key={item.mal_id} className="card-container">
//                     <img src={item.images.jpg.image_url} alt={item.title} />
//                     <h1>{item.title}</h1>
//                 </div>
//             )})}
//         </div>
//     );
// }
// export default TopFive;