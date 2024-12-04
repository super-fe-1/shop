import { useState } from 'react';
import formatPhoneNumber from '../utils/formatPhoneNumber';

const FormInput = ({ label, fieldData, regex, helpText }) => {
  const [isValid, setIsValid] = useState(true);

  const validateValue = (e) => {
    let { value } = e.target;

    if (fieldData.type === 'tel') {
      value = formatPhoneNumber(value);
      e.target.value = value;
    }

    if (regex) {
      setIsValid(regex.test(value));
    }
  };

  return (
    <div>
      <label>{label}</label>
      <input
        id={fieldData.id}
        type={fieldData.type}
        required={fieldData.required}
        onChange={validateValue}
        autoComplete="off"
      />
      {!isValid && <p>{helpText}</p>}
    </div>
  );
};

export default FormInput;
