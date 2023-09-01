import { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "./FormComponents/TextInput";
import ComentaryInput from "./FormComponents/ComentaryInput";

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
        <TextInput id="email" value={email} setValue={setEmail} />
      </div>
      <div className="formDiv">
        <ComentaryInput
          id="comentary"
          value={comentary}
          setValue={setComentary}
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
