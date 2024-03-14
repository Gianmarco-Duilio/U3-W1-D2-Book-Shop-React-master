import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
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
            <Button
              id="btn"
              variant="warning"
              className="border-black"
              onClick={(e) =>
                this.setState((initialState) => ({
                  selected: !initialState.selected,
                }))
              }
            >
              AGGIUNGI AL CARRELLO
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-cart4"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
              </svg>
            </Button>
          </Card.Body>
          {this.state.selected && <CommentArea asin={asin} />}
        </Card>
      </>
    );
  }
}

export default SingleBook;
