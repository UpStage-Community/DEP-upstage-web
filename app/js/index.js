import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

import App from 'pages/app'
import store from 'store'


const app = document.getElementById('app')

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App} />
        </Router>
    </Provider>
    , app
)
