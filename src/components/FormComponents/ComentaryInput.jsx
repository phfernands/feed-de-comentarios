import PropTypes from "prop-types";

ComentaryInput.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
};

export default function ComentaryInput({ id, value, setValue }) {
  return (
    <>
      <label htmlFor={id}>Comentário:</label>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="inputText"
        rows="10"
        name={id}
        id={id}
      />
    </>
  );
}
