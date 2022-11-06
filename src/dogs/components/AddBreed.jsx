import { useState } from 'react'

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
        placeholder="¡O Busca aquí!"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>  
  )
}


