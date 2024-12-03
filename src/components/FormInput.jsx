import { useState } from 'react';
import formatPhoneNumber from '../utils/formatPhoneNumber';

const FormInput = ({ label, fieldData, handleOnChange, regex, helpText }) => {
  const [isInvalid, setIsInvalid] = useState(false);

  const validValue = (e) => {
    let { value } = e.target;

    if (fieldData.type === 'tel') {
      value = formatPhoneNumber(value);
      e.target.value = value;
    }

    if (regex) {
      setIsInvalid(!regex.test(value));
    }

    handleOnChange(e);
  };

  return (
    <div>
      <label>{label}</label>
      <input
        id={fieldData.id}
        type={fieldData.type}
        required={fieldData.required}
        onChange={validValue}
        autoComplete="off"
      />
      {isInvalid && <p>{helpText}</p>}
    </div>
  );
};

export default FormInput;
