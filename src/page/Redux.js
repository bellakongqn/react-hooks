import React from 'react'
import { Provider } from "react-redux";
import Store from '../store/index'
import Index from './Index'

export default function Redux() {

    return(
        <Provider store={Store}>
           <Index />
        </Provider>  
    )
    
}