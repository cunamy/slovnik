const updateGame = (state,action) => {
    if (state === undefined){
        return {
            words: [],
            loading: false,
            error: null
        }
        
    }
    switch (action.type){
        case 'FETCH_GAME_REQUEST':
            return{
                words:[],
                loading:true,
                error:null
            }
        case 'FETCH_GAME_SUCCESS':
            return{
                words:action.payload,
                loading:false,
                error:null
            }
        case 'FETCH_GAME_FAILURE':
            return{
                words:[],
                loading:false,
                error:action.payload
            }
        default:
            return state.game;
    }
}

export default updateGame;