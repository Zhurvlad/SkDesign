import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Global } from './Global';
import {Provider} from "react-redux";
import {store} from "./store";




ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <>
             <Global/>

                <App/>


        </>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

