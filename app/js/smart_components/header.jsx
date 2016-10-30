import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import 'styles/header'

@connect((store) => {
    return {
        header: store.header
    }
})

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                    UpStage Community
                </div>
                <div className="right-area">
                    <div className="navbar">
                        <Link to="/productions" >Productions</Link>
                        <Link to="/companies" >Companies</Link>
                    </div>
                    <div className="hamburger">
                        <i className="fa fa-bars" aria-hidden="true" />
                    </div>
                </div>
            </div>
        )
    }
}