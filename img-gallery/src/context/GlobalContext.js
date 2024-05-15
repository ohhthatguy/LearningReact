import React, {createContext, useEffect, useReducer, useState} from "react";
import GlobalReducer from './GlobalReducer'

//creating a context
export const GlobalContext = createContext(null);





//consuming a context
export const GlobalProvider = ({children})=>{

    const KEY = '43810239-670d20cfd8afe8e1ccc1b14c0'
    const baseUrl = `https://pixabay.com/api/?key=${KEY}`

    const [state, dispatch] = useReducer(GlobalReducer, []);
    const [input,setInput]  = useState('random');
    const [total, setTotal] = useState(3);


    //Action
     const searchWithUserInput= async(input, total)=>{

        const params = {
            q: input,
            // id: 'id',
            image_type: "photo",  // image_type: "all", "photo", "illustration", "vector"
            category: 'nature', //category: backgrounds, fashion, nature, science, education, feelings, health, people, religion, places, animals, industry, computer, food, sports, transportation, travel, buildings, business, music
            order:'latest' , //order: popular, latest
            page: 1, //page:default: 1
            // (isClicked && per_page: total )
            per_page: total, //per_page:Accepted values: 3 - 200,   Default: 20
          }

        console.log(total)


          const url = new URL(baseUrl);
          Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        
            // console.log(url)

        const response = await fetch(url)
        const data = await response.json();
        // console.log(data)

        dispatch({type: 'SEARCH_WITH_USER_INPUT', payload: data})
    }

   
       

    useEffect(()=>{
        searchWithUserInput(input, total)
    },[total, input])

 


        // console.log(state)
    return (<GlobalContext.Provider value={{ state, total, setTotal, setInput, input}}>

        {children}

    </GlobalContext.Provider>)


}