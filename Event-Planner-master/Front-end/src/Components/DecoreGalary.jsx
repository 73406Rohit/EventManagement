

import img1 from "../imges/1.jpg"
import img2 from "../imges/2.jpg"
import img3 from "../imges/3.jpg"
import img4 from "../imges/4.jpg"
import img5 from "../imges/8.jpg"
import img6 from "../imges/6.jpg"
import NavBar from './NavBar';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import BottomNav from "./BottomNav"

function DecoreGalary() {
  return (
    <div className="container-fluid">
    <h4 id="h4">EVENTPLANER</h4>
    <NavBar></NavBar>
    

  
    <CardGroup className="mt-5">
      <Card>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <strong className="text-muted">Price:- </strong>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={img2} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <strong className="text-muted">Price:- </strong>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={img3} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <strong className="text-muted">Price:- </strong>
        </Card.Footer>
      </Card>
    </CardGroup>

    <CardGroup className="mt-5 mb-5">
      <Card>
        <Card.Img variant="top" src={img4} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <strong className="text-muted">Price:- </strong>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={img5} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <strong className="text-muted">Price:- </strong>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={img6} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <strong className="text-muted">Price:- </strong>
        </Card.Footer>
      </Card>
    </CardGroup>
    <BottomNav/>
    </div> 
  );
}

export default DecoreGalary;