const FormInput = ({
  label,
  fieldData,
  handleOnChange,
  regex,
  errorMessage,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        id={fieldData.id}
        type={fieldData.type}
        required={fieldData.required}
        onChange={handleOnChange}
        autoComplete="off"
      />
      <p>{errorMessage}</p>
    </div>
  );
};

export default FormInput;
