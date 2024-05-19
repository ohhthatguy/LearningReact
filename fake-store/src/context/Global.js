import { createContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./GlobalReducerFunction";
import {reducerCategory} from "./GlobalReducerFunction"

//creating context
export const GlobalContext = createContext();





//creating context provider
export const GlobalProvider = ({children}) =>{
 
    const [state, dispatch] = useReducer(reducer, [])
    const [category, categoryDispatch] = useReducer(reducerCategory, [])
   
    

  

    //fetch all category
    const fetchAllCategory = async()=>{
        const res = await fetch('https://fakestoreapi.com/products/categories')
        const data = await res.json()
        categoryDispatch({type:'SHOW_ALL_CATEGORY', payload: data});
    
    }


    //fetch all data product
    const fetchAllProduct = async()=>{
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json() 
        dispatch({type:'SHOW_ALL_PRODUCT', payload:data})
    }

    
    
    
    useEffect(()=>{
        fetchAllProduct()
        fetchAllCategory()
    },[])


    // console.log(state)
    // console.log(category)

    
    return (<GlobalContext.Provider value={{state, category}}>

        {children}

    </GlobalContext.Provider>)
}