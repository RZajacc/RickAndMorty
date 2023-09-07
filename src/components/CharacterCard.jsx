import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../style/imageGallery.css';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function CharacterCard({fetchData}) {
  
  const characters = fetchData.results;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
   
  
  

  return (
    <>
      <Row className='justify-content-md-center'id='row'>
        <Col xs={10}>
               <Row className="g-3" id='gallery' xs={5}>
            {characters && characters.map((character, index) => (
              <Col key={index}>
                <div className="flip-box">
                  <div className='flip-box-inner'>
                    <div className="flip-box-front">
                       <Card className='card'>
                         <Card.Img src={character.image} className='images'></Card.Img>
                      </Card>
                    </div>
                    <div className='flip-box-back'> 
                      <h2>{character.name}</h2>
                      <Button id='learn-more' onClick={() => {
                        handleShow(character.name)
                      }}>Learn more</Button>
                   <Modal show={show} onHide={handleClose} id='character-modal'>
                    <Modal.Header closeButton id='mod-title'>
                      <Modal.Title >{character.name}</Modal.Title>
                    </Modal.Header>
                      <Modal.Body>
                        {/* <img src={character.image}></img>
                        <h2>Species: {character.species }</h2>
                        <h3>Status: {character.status }</h3> */}
                      </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                      

                    </div>
                  </div>
                </div>                      
              </Col>
        ))}
      </Row>
        </Col>
      </Row>

      
  
    </>
  )
}

export default CharacterCard