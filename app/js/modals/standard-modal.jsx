import React, { PropTypes } from 'react'
import Modal from 'react-modal'

import Button from 'stupid_components/button'

import 'styles/modal'

export default class StandardModal extends React.Component {

    backgroundClose() {
        if (this.props.backgroundCloseDisabled) {
            return
        }
        return this.props.closeMethod
    }
    render() {
        const buttonText = this.props.buttonText ? this.props.buttonText : "Okay"
        return (
            <Modal
                className="standard-modal"
                isOpen={this.props.open}
                onRequestClose={this.backgroundClose()}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(32, 32, 32, 0.7)'
                    },
                    content: {
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        bottom: 'auto',
                        transform: 'translate(-50%, -50%)',
                        maxWidth: '90%',
                        width: '375px',
                        minHeight: '100px',
                        padding: '0px',
                        overflow: 'visible'
                    }
                }}>
                <div className="title">
                    {this.props.title}
                </div>
                <div className="flexible-content">
                    {this.props.children}
                </div>
                <div className="button-container">
                    <Button onClick={this.props.closeMethod} text={buttonText} className="modal-button" />
                </div>
            </Modal>
        )
    }
}

StandardModal.propTypes = {
    open: React.PropTypes.bool.isRequired,
    closeMethod: React.PropTypes.func.isRequired,
    title: React.PropTypes.string.isRequired,
    backgroundCloseDisabled: React.PropTypes.bool,
    buttonText: PropTypes.string
}