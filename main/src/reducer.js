export const initialSate = {
    user: null,
    playlists: [],
    playing : false,
    item: null,
    
};

//it takes state and action
export const reducer = (state, action) => {
    console.log(action)
//Action -> type
    switch(action.type) {
        case 'SET_USER' :
        return {
            ...state,
            user: action.user
        }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            }
        default:
            return state
    }
}