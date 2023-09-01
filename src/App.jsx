import { useState } from "react";
import FeedForm from "./components/FeedForm";

function App() {
  const [comentaryList, setComentaryList] = useState([]);

  const newComentary = (email, comentary) => {
    const id = Math.floor(Math.random() * 1000000);
    const date = new Date().toLocaleString("pt-br");
    const coment = { id, date, email, comentary };
    setComentaryList((state) => [coment, ...state]);
  };

  return (
    <>
      <FeedForm newComentary={newComentary} />
      <hr />
      <div className="comentaryList">
        {comentaryList.length > 0 ? (
          comentaryList.map((coment) => (
            <div className="comentDiv" key={coment.id}>
              <h3>{coment.email}</h3>
              <p>{coment.date}</p>
              <p>{coment.comentary}</p>
            </div>
          ))
        ) : (
          <p>Nenhum comentário por aqui. Seja o primeiro a comentar!</p>
        )}
      </div>
    </>
  );
}

export default App;
