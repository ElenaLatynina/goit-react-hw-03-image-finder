import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalPicture, Overlay  } from './Modal.styled';


export class Modal extends Component{
    handleKeydown = element => {
        if (element.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();

        }
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown);

    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown);
    };

    render() {
        return (
            <Overlay onClick={this.handleBackdropClick}>
                <ModalPicture>
                    <img src={this.props.largeImageURL} alt={this.props.tags} />
                </ModalPicture>

            </Overlay>
        );
    }

}


export default Modal;
Modal.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired,
}