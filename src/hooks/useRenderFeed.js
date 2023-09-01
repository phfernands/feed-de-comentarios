import { useState } from "react";

export default function useRenderFeed() {
  const [comentaryList, setComentaryList] = useState([]);

  const newComentary = (email, comentary) => {
    const id = Math.floor(Math.random() * 1000000);
    const date = new Date().toLocaleString("pt-br");
    const coment = { id, date, email, comentary };
    setComentaryList((state) => [coment, ...state]);
  };

  return { comentaryList, newComentary };
}
