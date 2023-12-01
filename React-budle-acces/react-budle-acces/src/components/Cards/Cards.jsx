import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import "./Cards.css"
function Cards() {
  return (<>
    <CardGroup>
    <Card className="custom-card">
    <Link to="https://64b7fab71872d12250a34819--gregarious-semifreddo-588bc8.netlify.app/" target="_blank">
      <Card.Img variant="top" src="https://res.cloudinary.com/dzsgyqpap/image/upload/v1700810344/personal/weather.jpg" />
      </Link>
      <Card.Body className="card-body">
        <Link to="https://64b7fab71872d12250a34819--gregarious-semifreddo-588bc8.netlify.app/" target="_blank" className="custom-link">
          Weatherapp
        </Link>
        {/* <Card.Title to="/about">Weatherapp</Card.Title> */}
        <Card.Text className="card-text">
        Displaying the weather of the city. Response is the Given by Api. React Technology is used in this project.
        </Card.Text>
      </Card.Body>
    </Card>
      <Card className="custom-card">
      <Link to="https://655903378ad8c516d922dc74--lighthearted-bombolone-a75242.netlify.app/" target="_blank">
        <Card.Img variant="top" src="https://res.cloudinary.com/dzsgyqpap/image/upload/v1700810544/personal/todo.png" />
        </Link>
        <Card.Body>
        <Link to="https://655903378ad8c516d922dc74--lighthearted-bombolone-a75242.netlify.app/" target="_blank" className="custom-link">Todo</Link>
          {/* <Card.Title>Todo</Card.Title> */}
          <Card.Text>
           Let's Make Table
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className="custom-card">
      <Link to="https://6556333992ea440fd669c5bb--calm-choux-2ac9ff.netlify.app/" target="_blank">
        <Card.Img variant="top" src="https://res.cloudinary.com/dzsgyqpap/image/upload/v1700810488/personal/quiz.jpg" />
        </Link>
        <Card.Body>
        <Link to="https://6556333992ea440fd669c5bb--calm-choux-2ac9ff.netlify.app/" target="_blank" className="custom-link">Didital-Marketing</Link>
          {/* <Card.Title>Quiz</Card.Title> */}
          <Card.Text>
          Featuring a sleek and user-friendly interface, QuiziQ offers a seamless experience across devices. Dive into quizzes tailored to your interests, track your progress, and unlock achievements as you expand your knowledge horizons.
          </Card.Text>
        </Card.Body>
      
      </Card>
      <Card className="custom-card">
      <Link to="https://6555b06795b68643a7ae964d--jazzy-druid-d5048a.netlify.app/" target="_blank">
        <Card.Img variant="top" src="https://res.cloudinary.com/dzsgyqpap/image/upload/v1700810461/personal/pdf-extract.png" />
        </Link>
        <Card.Body>
        <Link to="https://6555b06795b68643a7ae964d--jazzy-druid-d5048a.netlify.app/ " target="_blank" className="custom-link">Page Extract from Pdf</Link>
          {/* <Card.Title>Pdf-Extract</Card.Title> */}
          <Card.Text>
          ExtractifyPDF, is a groundbreaking tool designed to effortlessly extract valuable content from PDF documents.
With ExtractifyPDF, users can seamlessly extract desired pages from big pdf.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className="custom-card">
      <Link to="https://64d89c95f606f97b4bfbc2e3--papaya-licorice-467ef3.netlify.app/" target="_blank">
        <Card.Img variant="top" src="https://res.cloudinary.com/dzsgyqpap/image/upload/v1700836067/personal/Fusion.jpg" />
        </Link>
        <Card.Body>
        <Link to="https://64d89c95f606f97b4bfbc2e3--papaya-licorice-467ef3.netlify.app/" target="_blank" className="custom-link">Fusion-Form</Link>
          {/* <Card.Title>Pdf-Extract</Card.Title> */}
          <Card.Text>
          ▪ A Responsive Landing page with Express.js backend and MongoDB integration, facilitating seamless form submission, validation.

Warning:- wait for minutes, because it takes time in loading.
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card className="custom-card">
      <Link to="https://satyam9721.github.io/intro/" target="_blank">
        <Card.Img variant="top" src="https://res.cloudinary.com/dzsgyqpap/image/upload/v1700836102/personal/intro.jpg" />
        </Link>
        <Card.Body>
        <Link to="https://satyam9721.github.io/intro/" target="_blank" className="custom-link">My Old Intro</Link>
          {/* <Card.Title>Pdf-Extract</Card.Title> */}
          <Card.Text>
           Let's Explore
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card className="custom-card">
      <Link to="https://64aad3cb2211463cf72514cd--creative-cupcake-bb54c5.netlify.app/" target="_blank">
        <Card.Img variant="top" src="https://res.cloudinary.com/dzsgyqpap/image/upload/v1700836356/personal/blog.jpg" />
        </Link>
        <Card.Body>
        <Link to="https://64aad3cb2211463cf72514cd--creative-cupcake-bb54c5.netlify.app/" target="_blank" className="custom-link">Dummy Blog</Link>
          {/* <Card.Title>Pdf-Extract</Card.Title> */}
          <Card.Text>
          User-friendly platform for sharing and managing blog posts. React.js is a popular JavaScript library for building user interfaces and its component-based architecture
          </Card.Text>
        </Card.Body>
      
      </Card>
    </CardGroup>
    <footer className="bg-dark text-light">
      <Container>
        <Row>
          {/* <Col xs={12} md={4} className="mb-4">
            <h5>About Us</h5>
            <p>A brief description of the company or project can go here.</p>
          </Col>
         
          <Col xs={12} md={4} className="mb-4">
            <h5>Contact Us</h5>
            <p>Email: example@example.com</p>
            <p>Phone: +1234567890</p>
          </Col> */}
        </Row>
      </Container>
      <div className="text-center py-3 footer-bottom">
        <p>&copy; 2023 Techy Satyam. All Rights Reserved.</p>
      </div>
    </footer>

    </>
  );
}

export default Cards;