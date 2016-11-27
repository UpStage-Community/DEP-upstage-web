import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'

import { openHamburger, 
    closeHamburger, 
    selectedLoginFromHamburger, 
    selectedLogoutFromHamburger
} 
    from 'actions/navigation'

import 'styles/hamburger'

function mapStoreToProps(store) {
    return {
        open: store.navigation.hamburgerOpen,
        currentUser: store.currentUser
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        openHamburger, 
        closeHamburger, 
        selectedLoginFromHamburger,
        selectedLogoutFromHamburger
    }, dispatch)
}

@connect(mapStoreToProps, mapDispatchToProps)

export default class Hamburger extends React.Component {
    constructor() {
        super()
        this.toggleOpen = this.toggleOpen.bind(this)
        this.loginLink = this.loginLink.bind(this)
    }

    toggleOpen() {
        if ( this.props.open ) {
            this.props.closeHamburger()
        } else {
            this.props.openHamburger()
        }
    }

    loginLink() {
        if (this.props.currentUser) {
            return (
                <a onClick={this.props.selectedLogoutFromHamburger}>Log out</a>
            )
        }
        return (
            <span>
                <a onClick={this.props.selectedLoginFromHamburger}>Log In</a>
                <Link to="sign-up" onClick={this.props.closeHamburger}>Sign Up</Link>
            </span>
        )
    }

    render() {
        return (
            <div className="nav hamburger">
                <i onClick={ this.toggleOpen } className="fa fa-bars" aria-hidden="true" />
                <div className="hamburger-menu" hidden={ !this.props.open }>
                    { this.loginLink() }
                </div>
            </div>
        )
    }
}