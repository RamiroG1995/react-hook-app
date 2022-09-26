import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, RouterProvider, Route } from "react-router-dom";

import { MainApp } from './09-useContext/MainApp';
//import { TodoApp } from './08-useReducer/TodoApp';

//import { Padre } from './07-tarea-memo/Padre';
//import { CallbackHook } from './06-memos/CallbackHook';
//import { MemoHook } from './06-memos/MemoHook';
//import { Memorize } from './06-memos/Memorize';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { Layout } from './05-useLoyoutEffect/Layout';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustimHook } from './01-useState/CounterWithCustimHook';
//import { HooksApp } from './HooksApp';
// import './08-useReducer/intro-reducer';

import './index.css';

 ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      {/* <React.StrictMode> */}
        <MainApp />
      {/* </React.StrictMode> */}
    </BrowserRouter>
    
  )
