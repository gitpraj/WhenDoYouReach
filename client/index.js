import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose} from 'redux';
import jwt from 'jsonwebtoken';
import rootReduce from './reducers/rootReducer';
import App from './components/app.js';


// const store = createStore(
//     rootReduce,
//     compose(
//         applyMiddleware(thunk),
//         window.devToolsExtension ? window.devToolsExtension() : f => f
//     )
// )

// <Provider store={store}>

// render(
//     <Provider>
//         <landingPage />
//     </Provider>
//     , document.getElementById('app')
// );


render(
        <App />
    , document.getElementById('app')
);
