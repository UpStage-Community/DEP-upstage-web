import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from 'smart_components/header'
import BottomNavigation from 'smart_components/bottom_navigation'
import LoginModal from 'modals/login'

import 'styles/main'

function mapStoreToProps(store) {
    return { loginModalOpen: store.navigation.loginModalOpen }
}

@connect(mapStoreToProps)

export default class Layout extends React.Component {
    render() {
        return (
            <div className="layout">
                <Header />
                <div className="main-content">
                    {this.props.children}
                </div>
                <BottomNavigation />

                <LoginModal open={this.props.loginModalOpen}/>
            </div>
        )
    }
}