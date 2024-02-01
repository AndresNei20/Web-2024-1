import './style.css'
import React, { createElement } from 'react';
import {createRoot} from 'react-dom/client'
import { App } from './App';

const appContainer = document.querySelector("#app")
const root = createRoot(appContainer)


root.render(<App></App>)
console.log(appContainer);