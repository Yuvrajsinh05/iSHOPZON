import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Display from './Component/home/homedisplay';


const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Display/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing