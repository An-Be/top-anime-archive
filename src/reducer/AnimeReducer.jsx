const animeReducer = (state, action) => {
    switch(action.type){
        case 'FETCHING':
            return{
                ...state,
                animeStatus: 'fetching', 
                animeLoading: true,
                animeError: '',
                apiAnimeData: [],
            };
        case 'FETCHED':
            return{
                ...state,
                animeStatus: 'fetched', 
                apiAnimeData: action.payload,
                animeError: '', 
                animeLoading: false
            }
        case 'FETCH_ERROR':
            return{
                ...state,
                animeStatus: 'error', 
                animeError: 'something went wrong',
                animeLoading: false,
                apiData: [],
            };
        default:
            return state;
    }
}
export default animeReducer;