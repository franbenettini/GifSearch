import {useState } from "react";
import { AddCategory } from "../AddCategory/AddCategory";
import { GifGrid } from "../GiftGrid/GifGrid";




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
      <div>
        {/* Titulo */}
        <h1>GifApp</h1>
  
        {/* Input */}
        <AddCategory addCategory={handleAddCategory} />
        <button onClick={()=> clearSearch()}>Limpiear Busquedas</button>
        {/* Listado de Gif */}
  
        {
        categories.map((category, index) => (
            <GifGrid key={category} category={category} removeCategory={RemoveOneCategory} index={index}/>
        ))
        }
      </div>
    );
  };