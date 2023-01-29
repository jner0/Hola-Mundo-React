import React from 'react';
import ReactDom from 'react-dom/client';

import {HelloWorldApp}  from './HelloWorldApp';
import {FirstApp} from './FirstApp'

import './style.css'

ReactDom.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <FirstApp/>
    </React.StrictMode> 
)