import { useState } from "react";
import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";


export const GifGrid = ({category}) => {

  const {imagenes, loading} = useFetchGif(category);
  const [show, setShow] = useState(true);
 
  return (
    <>
        <h3>{category}</h3> 
        <button type="button" onClick={() =>setShow(!show)}>
          {show === true ? "Hide" : "Show"}
        </button>
        
        {/* Desplegar Listado */}
        <div className="card-grid">
          {
            loading ? <h2>Cargando...</h2> :
            show && imagenes.map(imagen => <GifItem key={imagen.id} {...imagen} />)
          }
        </div>            
    </>
  )
}
