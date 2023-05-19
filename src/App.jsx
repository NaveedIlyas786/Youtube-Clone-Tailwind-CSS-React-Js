import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from './context/ContextApi';

const  App=()=> {
  return (
    <AppContext>
       <BrowserRouter>
       <div className="flex flex-col h-full">
        <Header/>
        <Routes>
          <Route path="/" exact element={<Feed/>}/>  //! When we put keyword "exact" in the Specific Route then that route will be loaded first on page loaded...
          <Route path="/searchResult/:searchQuery" element={<SearchResult/>}/>
          <Route path="/video/:id" element={<VideoDetails/>}/>
        </Routes>
       </div>
       </BrowserRouter>
     </AppContext>
    
  )
}

export default App
 