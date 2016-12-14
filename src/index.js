import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap-css/index.js'

import App from './App.jsx';
import AppRouter from './appRouter.jsx';

ReactDOM.render(
	<AppRouter/>,
	document.getElementById('container')
);
