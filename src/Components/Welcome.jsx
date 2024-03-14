import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function Welcome() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="info">
        <Alert.Heading className="d-flex justify-content-center">
          BENVENUTO DOVE LA FANTASCIENZA DIVENTA REALTA'
        </Alert.Heading>
        <p className="d-flex justify-content-center">
          Benvenuto nel nostro mondo di storie scifi! Siamo entusiasti di darti
          il benvenuto. Qui troverai un vasto assortimento di libri che ti
          ispireranno, ti intrigheranno e ti porteranno in viaggi straordinari
          attraverso le pagine. Esplora i nostri scaffali virtuali, scopri nuove
          avventure. Buona navigazione!
        </p>
        <hr />
        <div className="d-flex justify-content-center">
          <Button onClick={() => setShow(false)} variant="outline-dark">
            Continua..
          </Button>
        </div>
      </Alert>
    </>
  );
}

export default Welcome;
