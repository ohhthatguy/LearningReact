import { createContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./GlobalReducerFunction";
import {reducerCategory} from "./GlobalReducerFunction"
import { reducerCart } from "./GlobalReducerFunction";

//creating context
export const GlobalContext = createContext();





//creating context provider
export const GlobalProvider = ({children}) =>{
 
    const [state, dispatch] = useReducer(reducer, [])
    const [category, categoryDispatch] = useReducer(reducerCategory, [])
    const [cart, cartDispatch] = useReducer(reducerCart, [{}])

   
    

  

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

    const CheckoutData = (productId,quantity, price)=>{

        cartDispatch({type: 'SAVE_CHECKOUT_DATA', payload: {
            productId: productId,
            quantity: quantity,
            price: price
        }})
        
    }

    
    
    
    useEffect(()=>{
        fetchAllProduct()
        fetchAllCategory()
        // fetchCart()
    },[])

    console.log(cart)
    return (<GlobalContext.Provider value={{state, category, CheckoutData}}>

        {children}

    </GlobalContext.Provider>)
}