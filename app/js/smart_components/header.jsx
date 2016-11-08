import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { openLoginModal } from 'actions/navigation'
import 'styles/header'

function mapStoreToProps(store) {
    return {
        currentLocation: store.navigation.currentLocation
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ openLoginModal }, dispatch)
}

@connect(mapStoreToProps, mapDispatchToProps)

export default class Header extends React.Component {

    getClassFor(linkName) {
        const { currentLocation } = this.props
        if (currentLocation == linkName) {
            return "active"
        }
        return ""
    }

    render() {
        return (
            <div className="header">
                <div className="logo">
                    UpStage Community
                </div>
                <div className="right-area">
                    <div className="navbar">
                        <Link to="/productions" 
                            className={this.getClassFor("Productions")}>
                            Productions
                        </Link>
                        <Link to="/companies" 
                            className={this.getClassFor("Companies")}>
                            Companies
                        </Link>
                    </div>
                    <a onClick={this.props.openLoginModal} >
                        Log In
                    </a>
                    <div className="hamburger">
                        <i className="fa fa-bars" aria-hidden="true" />
                    </div>
                </div>
            </div>
        )
    }
}