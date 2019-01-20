import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './App';
import AdminPanel from './AdminPanel';
import {Provider} from 'react-redux';
import store from '../store/store';


export default class Router extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route path="/admin" component={AdminPanel} />
                        <Route component={App} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }

}