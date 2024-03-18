import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    commentSpace: [],
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.props.selectedBookAsin !== prevProps.selectedBookAsin) {
      this.fetchComments(this.props.selectedBookAsin);
    }
  }

  fetchComments = (asin) => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYyZTMxYTcxYWZhZjAwMTkxNTY2YWUiLCJpYXQiOjE3MTA0MTk4NDgsImV4cCI6MTcxMTYyOTQ0OH0.13OhR5Gx6rEUSHv8av9pbB77_KXyTdZLOCF7O-zukD4",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore");
        }
      })
      .then((commentFromApi) => {
        console.log("Commenti:", commentFromApi);
        this.setState({
          commentSpace: commentFromApi,
        });
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <>
        <h3>Recensioni:</h3>
        <AddComment asin={this.props.selectedBookAsin} />
        <CommentList commentsFromList={this.state.commentSpace} />
      </>
    );
  }
}

export default CommentArea;
