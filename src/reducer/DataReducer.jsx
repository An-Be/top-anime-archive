const DataReducer = (state, action) => {
    switch(action.type){
        case 'FETCHING':
            return{
                ...state,
                status: 'fetching', 
                loading: true,
                error: '',
                data: [],
            };
        case 'FETCHED':
            return{
                ...state,
                status: 'fetched', 
                data: action.payload,
                error: '', 
                loading: false
            }
        case 'FETCH_ERROR':
            return{
                ...state,
                status: 'error', 
                error: 'something went wrong',
                loading: false,
                data: [],
            };
        default:
            return state;
    }
}
export default DataReducer;