const FormInput = ({ label, ...props }) => {
  return (
    <div>
      <label>{label}</label>
      <input autoComplete="off" {...props} />
    </div>
  );
};

export default FormInput;
