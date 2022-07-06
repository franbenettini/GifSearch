import React from 'react'
import { useState } from 'react'
import "./_AddCategory.scss"

export const AddCategory = ({ addCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({ target })=>{
        setInputValue(target.value);        
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length < 1) return;

        addCategory(inputValue.trim());        
        setInputValue('');
    }

  return (
    <form onSubmit={handleSubmit} >
        <input className='inputGif' 
            type='text'
            placeholder='Buscar Gif'
            value={inputValue}
            onChange={handleInputChange}
        />       
    </form>
  )
}
