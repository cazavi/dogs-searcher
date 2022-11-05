import React from 'react'
import ReactDOM from 'react-dom/client'
import { DogsApp } from './DogsApp';
import { Home } from './Home';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* <DogsApp /> */}
      <Home/>
  </React.StrictMode>
)
