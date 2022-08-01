const MangaReducer = (state, action) => {
    switch(action.type){
        case 'FETCHING':
            return{
                ...state,
                mangaStatus: 'fetching', 
                mangaLoading: true,
                mangaError: '',
                apiMangaData: [],
            };
        case 'FETCHED':
            return{
                ...state,
                mangaStatus: 'fetched', 
                apiMangaData: action.payload,
                mangaError: '', 
                mangaLoading: false
            }
        case 'FETCH_ERROR':
            return{
                ...state,
                mangaStatus: 'error', 
                mangaError: 'something went wrong',
                mangaLoading: false,
                apiMangaData: [],
            };
        default:
            return state;
    }
}
export default MangaReducer;