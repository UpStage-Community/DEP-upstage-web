import React from 'react'
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
            <div class="header">
                dis de header
            </div>
        )
    }
}