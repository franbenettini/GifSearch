import { useState } from "react";
import { useFetchGif } from "../../hooks/useFetchGif";
import { GifItem } from "../GifItem/GifItem";

import "./_GiftGrid.scss"


export const GifGrid = ({ category, removeCategory, index}) => {

  const {imagenes, loading} = useFetchGif(category);
  const [show, setShow] = useState(true);

  const RemoveOneCategory = ()=>{
    removeCategory(index);
  }
 
  return (
    <div className="gifGrid">
        <h3>{category}</h3> 
        <div className="buttonCategory">
          <button className="buttonRemove" onClick={RemoveOneCategory}>Remover Categoria</button>
          <button className="buttonHide" type="button" onClick={() =>setShow(!show)}>
            {show === true ? "Hide" : "Show"}
          </button>
        </div>
        
        
        {/* Desplegar Listado */}
        <div className="cardGrid">
          {
            loading ? <h2>Cargando...</h2> :
            show && imagenes.map(imagen => <GifItem key={imagen.id} {...imagen} />)
          }
        </div>            
    </div>
  )
}
