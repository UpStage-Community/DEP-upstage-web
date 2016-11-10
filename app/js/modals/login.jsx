import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Modal from 'react-modal'

import { closeLoginModal } from 'actions/navigation'

import StandardModal from 'modals/standard-modal'

import 'styles/login'

function mapStoreToProps(store) {
    return store.modals.loginModal
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ closeLoginModal }, dispatch)
}

@connect(mapStoreToProps, mapDispatchToProps)

export default class LoginModal extends React.Component {
    errors() {
        if (this.props.errors) {
            return (
                <div>
                    { this.props.errors.map ((error) => {
                        return (
                            <div key={error} className="error">
                                {error}
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

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
                    { this.errors() }
                </div>
            </StandardModal>
        )
    }
}