import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../style/imageGallery.css';
import Button from 'react-bootstrap/Button';

function CharacterCard({fetchData}) {
  
  const characters = fetchData.results;
  
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
                         <Card.Img src={character.image}></Card.Img>
                      </Card>
                    </div>
                    <div className='flip-box-back'> 
                      <h2>{character.name}</h2>
                      <Button id='learn-more'>Learn more</Button>
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