// // //custom hook to fetch data

// import { useEffect, useState } from "react"

// const useFetch = (url) => {
//     const[loading, setLoading] = useState(false);
//     const[apiData, setApiData] = useState([]);
//     const[serverError, setServerError] = useState(null);

//     useEffect(() => {
//         setLoading(true);
//         const fetchData = async () => {
//             try{
//                 const res = await fetch(url);
//                 const data = await res.json();

//                 setApiData(data.data);
//                 setLoading(false);
//             }catch(error){
//                 setServerError(error);
//                 setLoading(false);
//             }
//         }
//         fetchData();
//     }, [url])

//     return{ loading, apiData, serverError }
    
// };
// export default useFetch;