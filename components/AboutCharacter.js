import React from 'react';
import Modal from 'react-bootstrap/Modal';

const aboutCharacter = ({ show, onHide, data }) => {
    console.log(data.name)
    return (
        <Modal show={show}
        onHide={onHide}>
            <Modal.Header closeButton>
                <p>Modal title</p>
            </Modal.Header>

            <p>
                <p>Modal: {data.name}</p>
                <p>{data.height}</p>
            </p>

        </Modal>
    );
};

export default aboutCharacter;