import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import 'styles/bottom_navigation'

function mapStoreToProps(store) {
    return {
        currentLocation: store.navigation.currentLocation
    }
}

@connect(mapStoreToProps)

export default class BottomNavigation extends React.Component {
    getClassFor(linkName) {
        const { currentLocation } = this.props
        var className="bottom-nav-link"
        if (currentLocation == linkName) {
            return className + " active"
        }
        return className
    }

    render() {
        return (
            <div className="bottom-navigation">
                <Link  to="/productions"
                    className={this.getClassFor("Productions")}>
                    <i className="fa fa-ticket icon" />
                    <div className="subtext">Productions</div>
                </Link>
                <Link className="" to="/companies"
                    className={this.getClassFor("Companies")}>
                    <i className="fa fa-users icon" />
                    <div className="subtext">Companies</div>
                </Link>
            </div>
        )
    }
}