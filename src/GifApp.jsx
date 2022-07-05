import React from "react";
import { SearchGif } from "./components/SearchGif";
import { GifContextProvider } from "./context/GifContext";
import './GifApp.css';


const GifApp = () => {
  return (
    <div>
      <GifContextProvider>
        <SearchGif/>
      </GifContextProvider>
    </div>
  )
}

export default GifApp;
