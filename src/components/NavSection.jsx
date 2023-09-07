import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import '../style/navStyle.css';


function NavSection({setsearchVal}) {

  const changeInputHandler = (event) => {
    setsearchVal(event.target.value);
  }
  

    return (
      <Container fluid >
        <Row  id='nav'>
          <Col xs={2}>
            <InputGroup className='mb-3' >
              <InputGroup.Text id="search-addon">Find characters</InputGroup.Text>
              <Form.Control
                aria-label='searchKey'
                aria-describedby='search-addon'
                onChange={changeInputHandler}
                id="input-field"
              />
            </InputGroup>
          </Col>
        </Row>  
      </Container>
  )
}

export default NavSection