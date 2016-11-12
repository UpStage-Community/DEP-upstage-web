import React, { PropTypes } from 'react'
import Modal from 'react-modal'

import 'styles/modal'

export default class StandardModal extends React.Component {

    backgroundClose() {
        if (this.props.backgroundCloseDisabled) {
            return
        }
        return this.props.closeMethod
    }
    render() {
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

            </Modal>
        )
    }
}

StandardModal.propTypes = {
    open: React.PropTypes.bool.isRequired,
    closeMethod: React.PropTypes.func.isRequired,
    title: React.PropTypes.string.isRequired,
    backgroundCloseDisabled: React.PropTypes.bool
}