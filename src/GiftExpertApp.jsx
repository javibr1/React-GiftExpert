import {useState} from 'react'; 
import { AddCategory, GiftGrid } from './components';


export const  GiftExpertApp = () => {

    const [categories, setcategories] = useState( [  'Dragon Ball' ] )

    const onAddCategory = (NewCategory) => {
        
        //Validación de que no se repita los categories primero

        if (categories.includes(NewCategory) ) return;

        
        //Primera forma de hacerlo con sprunt o los 3 puntitos para copiar + add el valor deseado
        setcategories([NewCategory , ...categories]); 
        //Segunda forma con callback
        //  setcategories( cat => [ ...cat, 'Valorant']);
          
    }

  return (
    <> 
        {/*TITULO*/}
        <h1>GiftExpertApp</h1>
        
        {/*INPUT */}
        <AddCategory 
        //  setcategories= {setcategories} 
        onNewCategory={ onAddCategory } 
        />


        {/*LISTADO DE GIFTS*/}
 
        { 
        categories.map( category =>(
                <GiftGrid 
                    key={ category } 
                    category={category}
                />
            ))
        }      
    </>
)  
}
