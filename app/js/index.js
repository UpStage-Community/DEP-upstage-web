import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from 'store'

import Routes from 'containers/routes'


const app = document.getElementById('app')

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    app
)
