import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; //Change in folder structure, adding folder components to better organization of the app
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
