import { useState } from 'react'

 

export const   AddCategory = ({onNewCategory  }) => {

    const [inputValue, setInputValue] = useState("")

    const onInputChange = ({target}) => {
 
        setInputValue(target.value);


    }

    const onSubmit = (event) => {
        event.preventDefault ();
        const newInputValue = inputValue.trim();
        if (newInputValue.length <= 1)  {
            return;
        }

        // setcategories( categories => [ in  putValue , ...categories ] );
        onNewCategory( newInputValue )
        setInputValue("");
    }
  return (
    <form onSubmit={onSubmit}>
        <input
        type="text "
        placeholder="Buscar Gifts "
        value={inputValue}
        onChange={onInputChange}

        />
     </form> 
)
}
