import { createContext, useState, useEffect } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {

    const useFetch = (url) => {
        const[loading, setLoading] = useState(false);
        const[apiData, setApiData] = useState([]);
        const[serverError, setServerError] = useState(null);
    
        useEffect(() => {
            setLoading(true);
            const fetchData = async () => {
                try{
                    const res = await fetch(url);
                    const data = await res.json();
                    setApiData(data.data);
                    setLoading(false);
                }catch(error){
                    setServerError(error);
                    setLoading(false);
                }
            }
            fetchData();
        }, [url])
        return{ loading, apiData, serverError }
    }

    return(
        <DataContext.Provider value={{ useFetch }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;