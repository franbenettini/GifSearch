import { useContext, useState } from "react";
import GifContext from "../context/GifContext";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";




export const SearchGif = () => {
    const { clearSearch } = useContext(GifContext)
    const [categories, setCategories] = useState([]);
  
    const handleAddCategory = (value) => {
      setCategories([value, ...categories]);
  };

    /* const removeCategory = (id) =>{
      const category =  categories.filter(cat => cat.id !== id)
      setCategories(category)
    }  */

   /*  const removeCategory = (e)=>{
      const category = e.target.getAttribute("removeCat")
      setCategories(categories.filter(cat => cat.category !== category))
    } */

  

    return (
      <div>
        {/* Titulo */}
        <h1>GifApp</h1>
  
        {/* Input */}
        <AddCategory addCategory={handleAddCategory} />
        <button onClick={()=> clearSearch()}>Limpiear Busquedas</button>
        {/* Listado de Gif */}
  
        {
        categories.map((category) => (
          <div>
            {/* <button onClick={() => removeCategory(id)}>Eliminar Categoria</button> */}
            <GifGrid key={category} category={category}/>
            {/* <button removeCat={category} onClick={removeCategory}>Delete Category</button> */}
          </div>
        ))
        }
      </div>
    );
  };