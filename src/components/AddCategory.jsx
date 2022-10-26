import React, { useState } from 'react'

export const AddCategory = ({ setCategory, ...props}) => {
const[inputValue, setInputValue]=useState('One Punch!')

    const handleInput = (e) => { 

        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => { 

        e.preventDefault();
        setCategory(inputValue.trim());
        setInputValue('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Buscar gifs'
                value={inputValue}
             onChange={handleInput}
            />

        </form> 
  );
}
