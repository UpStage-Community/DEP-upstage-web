import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from 'containers/layout'

export default class Routes extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Layout}>

                </Route>
            </Router>
        )
    }
}
