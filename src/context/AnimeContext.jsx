import { createContext, useReducer } from "react";
import AnimeReducer from "../reducer/AnimeReducer";

export const AnimeContext = createContext(null);

const AnimeProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AnimeReducer, 
        {
            animeLoading: false,
            animeError: null,
            animeStatus: 'idle',
            apiAnimeData: [],
        })



    return(
        <AnimeContext.Provider value={{ ...state, dispatch  }}>
            {children}
        </AnimeContext.Provider>
    )
}

export default AnimeProvider;