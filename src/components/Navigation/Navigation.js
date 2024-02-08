import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () =>{
    return(
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container style = {{textAlign: "center", justifyContent: "center"}}>
            <Navbar.Brand style = {{"fontSize": 30}}href="#home">Math Quest</Navbar.Brand>
        </Container>
    </Navbar>)
}
export default Navigation;