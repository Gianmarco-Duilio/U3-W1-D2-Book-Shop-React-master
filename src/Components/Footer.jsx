import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const Footer = function () {
  return (
    <footer>
      <Container data-bs-theme="dark">
        <Row className="justify-content-center">
          <Col xs={4} className="footerCol">
            <ListGroup>
              <ListGroup.Item className="border-0">Copyright</ListGroup.Item>
              <ListGroup.Item className="border-0">
                Privacy Policy
              </ListGroup.Item>
              <ListGroup.Item className="border-0">
                Termini e condizioni
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={4} className="footerCol">
            <ListGroup>
              <ListGroup.Item className="border-0">Contattaci</ListGroup.Item>
              <ListGroup.Item className="border-0">
                Mappa del sito
              </ListGroup.Item>
              <ListGroup.Item className="border-0">
                Informativa sui cookie
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={4} className="footerCol">
            <ListGroup>
              <ListGroup.Item className="border-0">
                Lavora con noi
              </ListGroup.Item>
              <ListGroup.Item className="border-0">Newsletter</ListGroup.Item>
              <ListGroup.Item className="border-0">
                Assistenza clienti
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
