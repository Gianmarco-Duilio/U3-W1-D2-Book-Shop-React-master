import SingleBook from "./SingleBook";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BookList = function ({ books }) {
  return (
    <Container>
      <Row>
        {books.map((book) => (
          <Col xs={6} md={4} lg={3} className="p-3" key={book.asin}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
