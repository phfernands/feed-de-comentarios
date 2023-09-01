import PropTypes from "prop-types";

FeedComentaryList.propTypes = {
  comentaryList: PropTypes.array,
};

export default function FeedComentaryList({ comentaryList }) {
  return (
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
  );
}
