//reducer function


export default (state, action) =>{
    switch(action.type){

        case 'SEARCH_WITH_USER_INPUT':
            console.log('here')
            return [...action.payload.hits]


        default:
            return state
    }
}