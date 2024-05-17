//reducer function 

export const reducer=(state,action)=>{
    switch(action.type){

        
        case 'SHOW_ALL_PRODUCT':
            // console.log(action.payload)
           return {...state, ...action.payload} //products and realted data


        default:
        return state
    }
}

export const reducerCategory = (category,action)=>{
    switch(action.type){

        case 'SHOW_ALL_CATEGORY':
            return {...category, ...action.payload} //category


        default:
            return category
    }
}