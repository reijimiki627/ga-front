import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

export default function Other() {
  const title = "Other";

  return (
    <div className='practice-main'>
      <div className='container'>
        <h3>色々試そう</h3>
      </div>
      <div className=''></div>
      <Link href="/top">
        <Button variant="outline-primary">topに戻る</Button>
      </Link>
      <div className='practice-content'>
        <Container>
          <Row>
            <Col className='practice-col'>1 of 2</Col>
            <Col className='practice-col'>2 of 2</Col>
          </Row>
          <Row>
            <Col className='practice-col'>1 of 3</Col>
            <Col className='practice-col'>2 of 3</Col>
            <Col className='practice-col'>3 of 3</Col>
          </Row>
        </Container>
      </div>
      <div className='practice-content'>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className='practice-content'>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
