import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './client/App';

import './styles/reset.css';
import './styles/index.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
