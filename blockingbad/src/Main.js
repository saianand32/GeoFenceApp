import React from 'react'
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Alert from './Components/Alert/Alert';


function Main() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="alert" element={<Alert/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default Main