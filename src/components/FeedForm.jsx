import { useState } from "react";
import PropTypes from "prop-types";

FeedForm.propTypes = {
  newComentary: PropTypes.func,
};

export default function FeedForm({ newComentary }) {
  const [email, setEmail] = useState("");
  const [comentary, setComentary] = useState("");

  const submitComentary = (e) => {
    e.preventDefault();
    newComentary(email, comentary);
    console.log();
    setEmail("");
    setComentary("");
  };
  return (
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
  );
}
