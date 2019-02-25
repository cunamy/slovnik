import React from 'react';
import  {Switch,Route} from 'react-router-dom';

import './app.css';


import Header from '../header';
import Training from '../training';
import Dictionary from '../dictionary';

const App = () =>{
    return (
        <div className="slovnik-app">
            <Header />
            <Switch>
                <Route path="/"
                    render={() => <h2>Добро пожаловать в Словник!!!</h2>}
                    exact />
                <Route path="/training" component={Training} />
                <Route path="/dictionary" component={Dictionary} />
            </Switch>
        </div>
    )
}

export default App;