import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Modal from 'react-modal'

import { closeLoginModal } from 'actions/navigation'

import StandardModal from 'modals/standard-modal'

import 'styles/login'

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ closeLoginModal }, dispatch)
}

@connect(null, mapDispatchToProps)

export default class LoginModal extends React.Component {
    render(){
        return (
            <StandardModal 
                open={this.props.open} 
                title="Log In"
                closeMethod={ this.props.closeLoginModal }
                buttonText="SUBMIT">
                <div className="login-content">
                    <label className="label">
                        E-mail
                        <input className="input" />
                    </label>
                    <label className="label">
                        Password
                        <input className="input" type="password"/>
                    </label>
                </div>
            </StandardModal>
        )
    }
}

LoginModal.propTypes = {
    open: React.PropTypes.bool.isRequired
}