import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import '../style/navStyle.css';

import { useState } from 'react';

function NavSection({getSearchValue}) {

  const [searchVal, setsearchVal] = useState("");
  
  const changeInputHandler = (event) => {
    setsearchVal(event.target.value);
    getSearchValue(searchVal);
  }

    return (
      <Container fluid >
        <Row  id='nav'>
          <Col xs={2}>
            <InputGroup className='mb-3'>
              <InputGroup.Text id="search-addon">Find characters</InputGroup.Text>
              <Form.Control
                aria-label='searchKey'
                aria-describedby='search-addon'
                onChange={changeInputHandler}
              />
            </InputGroup>
          </Col>
        </Row>  
      </Container>
  )
}

export default NavSection