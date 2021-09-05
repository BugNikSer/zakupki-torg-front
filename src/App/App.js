import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../Header';
import Menu from '../Menu';
import Customers from '../Pages/Customers';
import CustomerDetail from '../Pages/Customers/CutomerDetail';
import Providers from '../Pages/Providers';
import ProviderDetail from '../Pages/Providers/ProviderDetail';
import Auctions from '../Pages/Auctions';
import AuctionDetail from '../Pages/Auctions/AuctionDetail';
import Loading from '../helpers/Loading';
import './App.scss';
import '../Pages/page.scss';

const App = () => {
    return (
        <BrowserRouter>
            <section className='app'>
                <Menu />
                <section className='content'>
                    <Switch>
                        <Route exact path='/'>
                            <>
                                <Header text="Добро пожаловать на сайт закупок" />
                                <Loading />
                            </>
                        </Route>
                        <Route exact path='/customers'>
                            <>
                                <Header text="Заказчики" />
                                <Customers />
                            </>
                        </Route>
                        <Route exact path='/customers/:id'>
                            <>
                                <Header text="Заказчики" />
                                <CustomerDetail />
                            </>
                        </Route>
                        <Route exact path='/providers'>
                            <>
                                <Header text="Поставщики" />
                                <Providers />
                            </>
                        </Route>
                        <Route exact path='/providers/:id'>
                            <>
                                <Header text="Поставщики" />
                                <ProviderDetail />
                            </>
                        </Route>
                        <Route exact path='/auctions'>
                            <>
                                <Header text="Аукционы" />
                                <Auctions />
                            </>
                        </Route>
                        <Route exact path='/auctions/:id'>
                            <>
                                <Header text="Аукционы" />
                                <AuctionDetail />
                            </>
                        </Route>
                    </Switch>
                </section>
            </section>
        </BrowserRouter>
    );
};

export default App;
