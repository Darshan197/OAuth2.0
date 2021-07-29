require('./bootstrap');

import Alpine from 'alpinejs';
import ReactDOM from 'react-dom';
import App from './components/App';

window.Alpine = Alpine;

Alpine.start();

const clientsRoot = document.getElementById('clients')

if(clientsRoot) ReactDOM.render(<App />, clientsRoot)