import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app';
const el = document.getElementById('app')
console.log(el,document)
const container = ReactDOM.createRoot(el)
container.render(<App />)