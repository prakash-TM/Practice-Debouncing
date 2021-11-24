import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Debounce from './components/DebounceUsingReact'

ReactDOM.render(
  <React.StrictMode>
    <Debounce />
  </React.StrictMode>,
  document.getElementById('root')
)
