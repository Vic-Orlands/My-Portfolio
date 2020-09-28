import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// import App from './version2/components/App';
import Homepage from './version2/components/Homepage';

ReactDOM.render(<Homepage />, document.getElementById('root'));

serviceWorker.register();
