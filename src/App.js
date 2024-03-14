import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./Components/MyNav";
import Foooter from "./Components/Footer";

// import Welcome from "./Components/Welcome";
// import AllTheBooks from "./Components/AllTheBooks";
import BookList from "./Components/BookList";
import SciFi from "./Data/scifi.json";

function App() {
  return (
    <div>
      <MyNav />
      <BookList books={SciFi} />
      <Foooter />
    </div>
  );
}

export default App;
