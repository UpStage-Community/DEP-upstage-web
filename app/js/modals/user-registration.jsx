import React, { Proptypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'

import { closeUserRegistrationModal, swtichToLoginModal } from 'actions/navigation'
import { 
    registerUser,
    userRegFirstNameChanged,
    userRegLastNameChanged,
    userRegEmailChanged,
    userRegPasswordChanged,
    userRegPasswordConfirmationChanged,
    userRegUrlChanged,
    userRegBioChanged
    } from 'actions/users'

import StandardModal from 'modals/standard-modal'
import Button from 'stupid_components/button'

import 'styles/login'

function mapStoreToProps(store) {
    return store.modals.userRegistrationModal
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        closeUserRegistrationModal,
        swtichToLoginModal,
        registerUser,
        userRegFirstNameChanged,
        userRegLastNameChanged,
        userRegEmailChanged,
        userRegPasswordChanged,
        userRegPasswordConfirmationChanged,
        userRegUrlChanged,
        userRegBioChanged
    }, dispatch)
}

@connect(mapStoreToProps, mapDispatchToProps)

export default class UserRegistrationModal extends React.Component {
    constructor() {
        super()
        this.submitRegistration = this.submitRegistration.bind(this)
        this.firstNameChange = this.firstNameChange.bind(this)
        this.lastNameChange = this.lastNameChange.bind(this)
        this.emailChange = this.emailChange.bind(this)
        this.passwordChange = this.passwordChange.bind(this)
        this.passwordConfirmationChange = this.passwordConfirmationChange.bind(this)
        this.urlChange = this.urlChange.bind(this)
        this.bioChange = this.bioChange.bind(this)
        this.openLoginModal = this.openLoginModal.bind(this)
    }

    submitRegistration(e) {
        e.preventDefault()
        const params = {
            "user": {
                "first_name": this.props.firstName,
                "last_name": this.props.lastName,
                "email": this.props.email,
                "password": this.props.password,
                "password_confirmation": this.props.passwordConfirmation,
                "url": this.props.url,
                "bio": this.props.bio
            }
        }
        this.props.registerUser(params)
    }

    firstNameChange(e) {
        this.props.userRegFirstNameChanged(e.target.value)
    }

    lastNameChange(e) {
        this.props.userRegLastNameChanged(e.target.value)
    }

    emailChange(e) {
        this.props.userRegEmailChanged(e.target.value)
    }

    passwordChange(e) {
        this.props.userRegPasswordChanged(e.target.value)
    }

    passwordConfirmationChange(e) {
        this.props.userRegPasswordConfirmationChanged(e.target.value)
    }

    urlChange(e) {
        this.props.userRegUrlChanged(e.target.value)
    }

    bioChange(e) {
        this.props.userRegBioChanged(e.target.value)
    }

    openLoginModal(e) {
        e.preventDefault()
        this.props.swtichToLoginModal()
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
                        <input className="input" name="first_name" onChange={this.firstNameChange} value={this.props.firstName} autoFocus />
                        <div className="error" hidden={!this.props.errors["first_name"]}>
                            {this.props.errors["first_name"]}
                        </div>
                    </label>
                    <label className="label" >
                        Last Name
                        <input className="input" name="last_name" onChange={this.lastNameChange} value={this.props.lastName} />
                        <div className="error" hidden={!this.props.errors["last_name"]}>
                            {this.props.errors["last_name"]}
                        </div>
                    </label>
                    <label className="label" >
                        Email
                        <input className="input" name="email" onChange={this.emailChange} value={this.props.email} />
                        <div className="error" hidden={!this.props.errors["email"]}>
                            {this.props.errors["email"]}
                        </div>
                    </label>
                    <label className="label">
                        Password
                        <input className="input" name="password" type="password" onChange={this.passwordChange} value={this.props.password}/>
                        <div className="error" hidden={!this.props.errors["password"]}>
                            {this.props.errors["password"]}
                        </div>
                    </label>
                    <label className="label">
                        Password Confirmation
                        <input className="input" name="password_confirmation" type="password" onChange={this.passwordConfirmationChange} value={this.props.passwordConfirmation}/>
                        <div className="error" hidden={!this.props.errors["password_confirmation"]}>
                            {this.props.errors["password_confirmation"]}
                        </div>
                    </label>
                    <label className="label" >
                        Personal Website (optional)
                        <input className="input" name="url" onChange={this.urlChange} value={this.props.url} />
                        <div className="error" hidden={!this.props.errors["url"]}>
                            {this.props.errors["url"]}
                        </div>
                    </label>
                    <label className="label" >
                        Bio (optional)
                        <textarea className="input" name="bio" onChange={this.bioChange} value={this.props.bio} />
                        <div className="error" hidden={!this.props.errors["bio"]}>
                            {this.props.errors["bio"]}
                        </div>
                    </label>
                    <Button text="SUBMIT" className="submit-button" />
                </form>
                <div className="center-link">
                    <a onClick={this.openLoginModal}>Already registered? Click here to Log In.</a>
                </div>
            </StandardModal>
        )
    }
}