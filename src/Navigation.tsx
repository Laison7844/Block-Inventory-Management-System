import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'


const Navigation: React.FC = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark" >
      <Container>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
          <Nav.Link href="/"><h4> Home</h4></Nav.Link>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}

          <Nav.Link href="/add"><h4>Add new</h4></Nav.Link>
          <Nav.Link href="/stock"><h4>Stock</h4></Nav.Link>
          <Nav.Link href="/listOfCustomers"><h4>Customers List</h4></Nav.Link>
          
             {/* <Nav.Link href="/about">About</Nav.Link> */}

                    </Nav>   
                </Navbar.Collapse> 
                </Container>
        </Navbar>
        
    );

}

export default Navigation;