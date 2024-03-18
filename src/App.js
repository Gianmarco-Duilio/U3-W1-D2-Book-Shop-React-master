import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./Components/MyNav";
import Footer from "./Components/Footer";
import BookList from "./Components/BookList";
import SciFi from "./Data/scifi.json";
import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CommentArea from "./Components/CommentArea";

class App extends Component {
  state = {
    selectedBookAsin: null,
  };
  setSelectedBookAsin = (asin) => {
    this.setState({ selectedBookAsin: asin });
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <MyNav />
          <Col xs={8}>
            <BookList books={SciFi} selectedBook={this.setSelectedBookAsin} />
          </Col>
          <Col xs={4}>
            <CommentArea asin={this.state.selectedBookAsin} />
          </Col>
          <Footer />
        </Row>
      </Container>
    );
  }
}

export default App;
