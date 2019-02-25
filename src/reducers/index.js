import updateGame from './game';

const reducer = (state, action) =>{
    return{
        game:updateGame(state,action)
    }
}

export default reducer;