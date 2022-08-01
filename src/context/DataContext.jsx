import { createContext, useReducer, useEffect } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {

    const initialState = {
        loading: false,
        error: null,
        status: 'idle',
        apiData: [],
    }
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type){
            case 'FETCHING':
                return{
                    ...state,
                    status: 'fetching', 
                    loading: true,
                    error: '',
                    apiData: [],
                };
            case 'FETCHED':
                return{
                    ...state,
                    status: 'fetched', 
                    apiData: action.payload,
                    error: '', 
                    loading: false
                }
            case 'FETCH_ERROR':
                return{
                    ...state,
                    status: 'error', 
                    error: 'something went wrong',
                    loading: false,
                    apiData: [],
                };
            default:
                return state;
        }
    }, initialState);

    const useFetch = (url) => {
    
        useEffect(() => {
            let cancelRequest = false;
            const fetchData = async () => {
                dispatch({type: 'FETCHING'});
                try{
                    const res = await fetch(url);
                    const data = await res.json();
                    if (cancelRequest) return;
                    dispatch({ type: 'FETCHED', payload: data.data})

                }catch(error){
                    if(cancelRequest) return;

                    dispatch({ type: 'FETCH_ERROR'})
                }
            }
            fetchData();
            console.log('fetching 1 time')
            return function cleanup(){
                cancelRequest = true;
            }
            
        }, [url])
        return{ state }
    }

    return(
        <DataContext.Provider value={{ useFetch }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;