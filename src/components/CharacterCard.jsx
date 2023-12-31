import React, { useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../style/imageGallery.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import MyModal from './MyModal';

function CharacterCard({searchVal, targetPage, setCharInfo}) {
  
  const [characters, setCharacters] = useState([])
  const [show, setShow] = useState(false);
  const [chardata, setcharData] = useState([])
  
  
  const handleShow = (name, image, species, status) => {
    setcharData([name, image, species, status]);
    setShow(true);
  }

  // * Fetch data from API
  const url = `https://rickandmortyapi.com/api/character?page=${targetPage}`;

  const fetchCharacters = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCharacters(data.results);
      setCharInfo(data.info);
    } catch (error) {
      console.log("Error ---->", error);
    }
  }
  
  useEffect(() => {
    fetchCharacters()
  }, [targetPage])


  
  const filteredCharacters = characters.filter((char) => {
    let searchValLower = searchVal.toLowerCase();
    let charNameLower = char.name.toLowerCase();

    return charNameLower.includes(searchValLower)
  })
   
  return (
    <>
      <Row className='justify-content-md-center'id='row'>
        <Col xs={10}>
            <Row className="g-3" id='gallery' xs={5}>
            {filteredCharacters && filteredCharacters.map((character, index) => (
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
                       <Button variant="success" onClick={() => {
                        handleShow(character.name, character.image, character.species, character.status);
                       }}>
                        Show more information
                      </Button>
                    </div>
                  </div>
                </div>                      
              </Col>
        ))}
      </Row>
        </Col>
      </Row>
      
      <MyModal show={show} setShow={setShow} charData={chardata} />
    </>
  )
}

export default CharacterCard