import {useState } from "react";
import { AddCategory } from "../AddCategory/AddCategory";
import { GifGrid } from "../GiftGrid/GifGrid";

import "./_SearchGif.scss"


export const SearchGif = () => {
    const [categories, setCategories] = useState([]);
  

    const clearSearch = () => {  
      setCategories([])
    }

    const handleAddCategory = (value) => {
      setCategories([value, ...categories]);
    }

    const RemoveOneCategory = index => {
      const value = [...categories];
      value.splice(index, 1);
      setCategories(value);
    };


    return (
      <div className="searchGif">
        {/* Titulo */}
        <h1>GifApp</h1>
  
        {/* Input */}
        <div className="inputButton">
          <AddCategory addCategory={handleAddCategory} />
          <button className="buttonCleanAll"  onClick={()=> clearSearch()}>Limpiear Busquedas</button>
        </div>
        
        {/* Listado de Gif */}
  
        {
        categories.map((category, index) => (
            <GifGrid key={category} category={category} removeCategory={RemoveOneCategory} index={index}/>
        ))
        }
      </div>
    );
  };