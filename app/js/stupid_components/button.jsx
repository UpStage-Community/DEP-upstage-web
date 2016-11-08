import React, { PropTypes } from 'react'

export default class Button extends React.Component {
    render() {
        return (
            <button className={this.props.className} onClick={this.props.onClick}>
                {this.props.text}
            </button>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string
}