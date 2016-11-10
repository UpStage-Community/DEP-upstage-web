import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Modal from 'react-modal'

import { closeLoginModal } from 'actions/navigation'
import { sendLoginCredentials } from 'api/index'
import { loginPasswordChanged, loginEmailChanged } from 'actions/index'

import StandardModal from 'modals/standard-modal'

import 'styles/login'

function mapStoreToProps(store) {
    return store.modals.loginModal
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
        closeLoginModal,
        loginPasswordChanged,
        loginEmailChanged,
        sendLoginCredentials,
    }, dispatch)
}

@connect(mapStoreToProps, mapDispatchToProps)

export default class LoginModal extends React.Component {
    constructor() {
        super()
        this.emailChange = this.emailChange.bind(this)
        this.passwordChange = this.passwordChange.bind(this)
        this.submitLogin = this.submitLogin.bind(this)
    }
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

    submitLogin() {
        const params = {
            "session": {
                "email": this.props.email,
                "password": this.props.password
            }
        }
        this.props.sendLoginCredentials(params)
    }

    emailChange(e) {
        this.props.loginEmailChanged(e.target.value)
    }

    passwordChange(e) {
        this.props.loginPasswordChanged(e.target.value)
    }

    render(){
        return (
            <StandardModal 
                open={this.props.open} 
                title="Log In"
                closeMethod={ this.props.closeLoginModal }
                buttonText="SUBMIT"
                buttonMethod={ this.submitLogin }>
                <div className="login-content" >
                    <label className="label">
                        E-mail
                        <input className="input" onChange={this.emailChange} value={this.props.email}/>
                    </label>
                    <label className="label">
                        Password
                        <input className="input" type="password" onChange={this.passwordChange} value={this.props.password}/>
                    </label>
                    { this.errors() }
                </div>
            </StandardModal>
        )
    }
}