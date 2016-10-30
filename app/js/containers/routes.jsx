import React from 'react'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'

import Layout from 'containers/layout'
import ProductionsPage from 'containers/productions'

export default class Routes extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Layout}>
                    <IndexRedirect to="productions" />
                    <Route path="productions" component={ProductionsPage} />
                </Route>
            </Router>
        )
    }
}
