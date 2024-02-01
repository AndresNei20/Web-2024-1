import './style.css'
import React, { createElement } from 'react';
import {createRoot} from 'react-dom/client'

const appContainer = document.querySelector("#app")
const root = createRoot(appContainer)

function App(){
    return(
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
        )
    }

function Header(){
    return(
        <header>hello i'm 1st</header>
        )
    }
 
function Body(){
    return(
        <main>hello i'm 2nd</main>
        )
    }

function Footer(){
    return(
         <footer>hello i'm 3rd</footer>
        )
    }

root.render(<App/>)
console.log(appContainer);