import { useState } from 'react'
import PropTypes from 'prop-types';

export const AddBreed = ({onNewBreed}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) => {
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories(categories =>[inputValue, ...categories ]);
    setInputValue('');
    onNewBreed(inputValue.trim());
  }

  return (
    <form onSubmit={onSubmit} aria-label='form'>
      <input 
        type="text"
        placeholder="¡Busca tu raza preferida!"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>  
  )
}


