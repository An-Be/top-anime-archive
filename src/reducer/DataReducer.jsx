const DataReducer = (state, action) => {
    console.log('pinned dispatched', action)
    console.log('pinned state', state)
    switch(action.type){
        case 'FETCHING':
            return{
                ...state,
                status: 'fetching', 
                loading: true,
                error: ''
            };
        case 'FETCHED':
        return{
            ...state,
            status: 'fetched', 
            apiData: action.payload,
            error: '', 
            loading: false
        }
        case 'FETCHED_ANIME':
            return{
                ...state,
                status: 'fetched', 
                animeData: action.payload,
                error: '', 
                loading: false
            }
        case 'FETCHED_ANIME_REC':
            return{
                ...state,
                status: 'fetched', 
                animeRecData: action.payload,
                error: '', 
                loading: false
            }
        case 'FETCHED_RANDOM_ANIME':
            return{
                ...state,
                status: 'fetched', 
                randomAnimeData: action.payload,
                error: '', 
                loading: false
            }
        case 'FETCHED_RANDOM_MANGA':
            return{
                ...state,
                status: 'fetched', 
                randomMangaData: action.payload,
                error: '', 
                loading: false
            }
        case 'FETCHED_MANGA':
        return{
            ...state,
            status: 'fetched', 
            mangaData: action.payload,
            error: '', 
            loading: false
        }
        case 'FETCHED_MANGA_REC':
            return{
                ...state,
                status: 'fetched', 
                mangaRecData: action.payload,
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
}
export default DataReducer;