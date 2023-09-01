import { useState } from "react";

function App() {
  const [comentaryList, setComentaryList] = useState([]);
  const [email, setEmail] = useState("");
  const [comentary, setComentary] = useState("");

  const newComentary = (email, comentary) => {
    const id = Math.floor(Math.random() * 1000000);
    const date = new Date().toLocaleString("pt-br");
    const coment = { id, date, email, comentary };
    setComentaryList((state) => [coment, ...state]);
  };

  const submitComentary = (e) => {
    e.preventDefault();
    newComentary(email, comentary);
    console.log();
    setEmail("");
    setComentary("");
  };
  return (
    <>
      <form onSubmit={submitComentary} className="feedFrom" action="">
        <h1>Feed de Comentários</h1>
        <div className="formDiv">
          <label htmlFor="email">E-mail:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="inputText"
            type="text"
            id="email"
            name="email"
          />
        </div>
        <div className="formDiv">
          <label htmlFor="comentary">Comentário:</label>
          <textarea
            value={comentary}
            onChange={(e) => setComentary(e.target.value)}
            className="inputText"
            rows="10"
            name="comentary"
            id="comentary"
          />
        </div>
        <div className="formDiv">
          <button className="submitButton" type="submit">
            Enviar Comentario
          </button>
        </div>
      </form>
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
