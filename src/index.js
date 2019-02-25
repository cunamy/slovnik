import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import store from './store';
import ErrorBoundary from './components/error-boundry';
import {
    ServiceProvider    
  } from './components/hoc-helpers';
import App from './components/app';

import WordService from './services/word-service';

const services = {
    wordService: new WordService()
}

ReactDOM.render(
    <Provider store = {store}>
        <ErrorBoundary>
            <ServiceProvider value={services}>
                <Router>
                    <App />
                </Router>
            </ServiceProvider>
        </ErrorBoundary>    
    </Provider>,
    document.getElementById('root')
);
