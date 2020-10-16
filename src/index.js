import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import App from './app';
import { GlobalStyles } from './styles/global';
import { firebaseData } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebaseContext';

render(
	<>
		<FirebaseContext.Provider value={{ firebaseData }}>
			<GlobalStyles />
			<App />
		</FirebaseContext.Provider>
	</>,
	document.getElementById('root')
);
