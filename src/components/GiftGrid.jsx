// import { useEffect, useState  } from "react";  
// import { getGifts } from "../helpers/GetGifts";  
import { GiftItem } from "./GiftItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GiftGrid = ( { category } ) => {


  const {images, isLoading } = useFetchGifs(category); 

  return (
   <>
     <h1>{ category }</h1>
     {
        isLoading  && (<h2>Cargando... </h2>) 
     }
     
     <div className="card-grid">
      {
        images.map((image) =>(
          <GiftItem 
          key={ image.id }   
          {...image }
          />
          
        ))
      } 
     </div>
       
   </>
  )
}
