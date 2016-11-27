import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from 'smart_components/header'
import BottomNavigation from 'smart_components/bottom_navigation'
import LoginModal from 'modals/login'
import UserRegistrationModal from 'modals/user-registration'

import { getCurrentUser } from 'actions/index'

import 'styles/main'

function mapStoreToProps(store) {
    return { 
        currentUser: store.currentUser
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getCurrentUser }, dispatch)
}

@connect(mapStoreToProps, mapDispatchToProps)

export default class Layout extends React.Component {
    loginRefresh() {
        if (!this.props.currentUser && localStorage.getItem('user_token')) {
            this.props.getCurrentUser()
        }
    }
    render() {
        this.loginRefresh()
        return (
            <div className="layout">
                <Header />
                <div className="main-content">
                    {this.props.children}
                </div>
                <BottomNavigation />

                <LoginModal />
                <UserRegistrationModal />
            </div>
        )
    }
}