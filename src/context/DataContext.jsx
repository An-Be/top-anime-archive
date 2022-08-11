import { createContext, useReducer } from "react";
import DataReducer from "../reducer/DataReducer";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {

    const [state, dispatch] = useReducer(DataReducer, 
        {
            loading: false,
            error: null,
            status: 'idle',
            apiData: [],
            animeData: [],
            mangaData: [],
            recData: [],
            randomAnimeData: [],
            randomMangaData: [],
            animeSeasonData: [],
            oneAnimeData: [],
            oneMangaData: [],
            animeList: [],
            mangaList: []
        })

    return(
        <DataContext.Provider value={{ ...state, dispatch  }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;