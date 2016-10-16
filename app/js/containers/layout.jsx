import React from 'react'

import Header from 'smart_components/header'

import 'styles/main'

export default class Layout extends React.Component {
    render() {
        return (
            <div className="layout">
                <Header />
                {this.props.children}
            </div>
        )
    }
}