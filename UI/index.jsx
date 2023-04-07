import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Recommend from './Recommend';
import Map from './Map';
import Result from './Result'; {/* 모든 페이지 import */}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Recommend/>}/> {/* 메인페이지 : 실행 시 가장 먼저 뜨는 화면*/}
        <Route path="/map" element={<Map/>}/>
        <Route path="/recommend" element={<Recommend/>}/>
        <Route path="/result" element={<Result/>}/> {/* 나머지 페이지들 path 설정 */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
