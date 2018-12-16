import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// page components

import Header from './components/Header/Header'
import Archive from './pages/Archive/Archive'
import './App.css'

import { cart } from './redux/reducer'

const store = createStore(cart)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <div>
                        <Header />
                        <Switch>
                            <Route path="/" component={Archive} />
                        </Switch>
                    </div>
                </HashRouter>
            </Provider>
        )
    }
}

export default App
