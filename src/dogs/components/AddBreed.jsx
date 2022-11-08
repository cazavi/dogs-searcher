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
    <>
    <div className="col-4 ">

    <form onSubmit={onSubmit} aria-label='form'>
      <input className='form-control'
        type="text"
        placeholder="¡Busca aquí!"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>  
    </div>
    </>
  )
}


