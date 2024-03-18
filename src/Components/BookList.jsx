import SingleBook from "./SingleBook";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BookList = function ({ books, selectedBook }) {
  return (
    <Container>
      <Row>
        {books.map((book) => (
          <Col xs={12} md={6} lg={4} xl={3} className="p-3" key={book.asin}>
            <SingleBook selectedBook={this.props.selectedBook} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
