import { createContext, useReducer } from "react";
import MangaReducer from "../reducer/MangaReducer";

export const MangaContext = createContext(null);

const MangaProvider = ({ children }) => {

    const [state, dispatch] = useReducer(MangaReducer, 
        {
            mangaLoading: false,
            mangaError: null,
            mangaStatus: 'idle',
            apiMangaData: [],
        })
    

    return(
        <MangaContext.Provider value={{...state, dispatch }}>
            {children}
        </MangaContext.Provider>
    )
}

export default MangaProvider;