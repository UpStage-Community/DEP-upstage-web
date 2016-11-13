import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Hamburger from 'smart_components/hamburger'

import 'styles/header'

function mapStoreToProps(store) {
    return {
        currentLocation: store.navigation.currentLocation
    }
}

@connect(mapStoreToProps)

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
                <div className="nav logo">
                    UpStage Community
                </div>
                <div className="nav right-area">
                    <div className="nav navbar">
                        <Link to="/productions" 
                            className={this.getClassFor("Productions")}>
                            Productions
                        </Link>
                        <Link to="/companies" 
                            className={this.getClassFor("Companies")}>
                            Companies
                        </Link>
                    </div>

                    <Hamburger />
                </div>
            </div>
        )
    }
}