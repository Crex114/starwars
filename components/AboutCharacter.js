import React from 'react';
import Modal from 'react-bootstrap/Modal';

const aboutCharacter = ({ show, onHide }) => {
    return (
        <Modal show={show}
        onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

        </Modal>
    );
};

export default aboutCharacter;