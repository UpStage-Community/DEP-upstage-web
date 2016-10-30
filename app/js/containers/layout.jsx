import React from 'react'

import Header from 'smart_components/header'
import BottomNavigation from 'smart_components/bottom_navigation'

import 'styles/main'

export default class Layout extends React.Component {
    render() {
        return (
            <div className="layout">
                <Header />
                <div className="main-content">
                    {this.props.children}
                </div>
                <BottomNavigation />
            </div>
        )
    }
}