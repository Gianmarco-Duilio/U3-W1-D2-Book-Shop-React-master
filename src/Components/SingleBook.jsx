import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  updateClick = () => {
    this.setState((prevState) => ({ selected: !prevState.selected }));
    this.props.selectedBook(this.props.book.asin);
  };

  render() {
    const { img, title, price, asin } = this.props.book;

    return (
      <>
        <Card id="cardStyle" className={this.state.selected ? "cardStyle" : ""}>
          <Card.Img variant="top" src={img} id="imgCard" />
          <Card.Body className="d-flex flex-column">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{price}€</Card.Text>
            <Button id="btn" variant="warning" className="border-black" onClick={this.updateClick}>
              AGGIUNGI
            </Button>
          </Card.Body>
          {/* {this.state.selected && <CommentArea asin={asin} />} */}
        </Card>
      </>
    );
  }
}

export default SingleBook;
