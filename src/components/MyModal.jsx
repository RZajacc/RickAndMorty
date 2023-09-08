import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function MyModal({show, setShow, charData}) {

    const handleClose = () => setShow(false);
    
    return (

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title><strong>Character name:</strong> {charData[0]}</Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <img src={charData[1]}></img>
                <div id='char-desc'>
                    <h4>Species: <span></span> {charData[2]}</h4>
                <h4>Status: {charData[3]}</h4>
                </div>
                
            </Modal.Body>
        <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
            Close
            </Button>
        </Modal.Footer>
        </Modal>
  )
}

export default MyModal