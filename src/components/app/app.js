import React from 'react';
import  {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import './app.css';

import ErrorBoundry from '../error-boundry';
import Header from '../header';
import Training from '../training';
import Dictionary from '../dictionary';

const App = () =>{
    return (
        <ErrorBoundry>
            <Router>
                <div className = "slovnik-app">
                    <Header/>
                    <Switch>
                        <Route path="/" 
                            render= {()=><h2>Добро пожаловать в Словник!!!</h2>}
                            exact />
                        <Route path="/training" component={Training}/>
                        <Route path="/dictionary" component={Dictionary}/>
                    </Switch>
                </div>
            </Router>
        </ErrorBoundry>
    )
}

export default App;