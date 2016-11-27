import React, { Proptypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'

import { closeUserRegistrationModal } from 'actions/navigation'
import { registerUser } from 'actions/index'
import { } from 'actions/index'

import StandardModal from 'modals/standard-modal'
import Button from 'stupid_components/button'

import 'styles/login'

function mapStoreToProps(store) {
    return store.modals.userRegistrationModal
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        closeUserRegistrationModal,
        registerUser
    }, dispatch)
}

@connect(mapStoreToProps, mapDispatchToProps)

export default class UserRegistrationModal extends React.Component {
    constructor() {
        super()
        this.submitRegistration = this.submitRegistration.bind(this)
    }
    errors() {
        if (this.props.errors) {
            return (
                <div>
                    {this.props.errors.map((error, index) => {
                        return (
                            <div key={index} className="error">
                                {error}
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    submitRegistration(e) {
        e.preventDefault()
        console.log("Submit pressed")
    }

    render() {
        return (
            <StandardModal
                open={this.props.open}
                title="Sign Up"
                closeMethod={ this.props.closeUserRegistrationModal }
                buttonText="SUBMIT"
                buttonMethod={ this.submitRegistration }>
                <form className="login-content" onSubmit={ this.submitRegistration }>
                    <label className="label" >
                        First Name
                        <input className="input" name="first_name" autoFocus />
                    </label>
                </form>
            </StandardModal>
        )
    }
}