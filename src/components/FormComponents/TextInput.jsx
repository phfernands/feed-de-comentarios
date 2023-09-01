import PropTypes from "prop-types";

TextInput.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
};

export default function TextInput({ id, value, setValue }) {
  return (
    <>
      <label htmlFor={id}>E-mail:</label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="inputText"
        type="text"
        id={id}
        name={id}
      />
    </>
  );
}
