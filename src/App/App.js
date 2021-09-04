import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from '../Menu';
import Customers from '../Pages/Customers';
import './App.scss';

const App = () => {
    return (
        <BrowserRouter>
            <section className='app'>
                <Menu />
                <section className='content'>
                    <Switch>
                        <Route exact path='/'>
                            Home
                        </Route>
                        <Route exact path='/customers'>
                            <Customers />
                        </Route>
                        <Route exact path='/providers'>
                            Providers
                        </Route>
                    </Switch>
                </section>
            </section>
        </BrowserRouter>
    );
};

export default App;
