import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import FormInput from './FormInput';

const AuthForm = () => {
  const location = useLocation();

  const [authFormData, setAuthFormData] = useState({});

  const pathname = location.pathname;

  const authFormFields =
    pathname === '/login'
      ? [
          { id: 'email', name: '이메일', type: 'email', required: true },
          {
            id: 'password',
            name: '비밀번호',
            type: 'password',
            required: true,
          },
        ]
      : [
          { id: 'email', name: '이메일', type: 'email', required: true },
          {
            id: 'password',
            name: '비밀번호',
            type: 'password',
            required: true,
          },
          { id: 'tel', name: '전화번호', type: 'tel', required: true },
          { id: 'address', name: '주소', type: 'text', required: true },
          { id: 'profileImg', name: '프로필', type: 'file', required: false },
        ];

  const authValidators = {
    email: {
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      helpText: '이메일 형식에 맞지 않습니다.',
    },
    password: {
      regex: /^[A-Za-z0-9]{8,20}$/,
      helpText: '비밀번호는 8~20자 사이의 영문자와 숫자만 가능합니다.',
    },
    tel: {
      regex: /^[\d-]+$/,
      helpText: '전화번호를 확인해주세요',
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {authFormFields.map((field) => (
          <FormInput
            key={field.id}
            label={field.name}
            fieldData={field}
            handleOnChange={setAuthFormData}
            regex={authValidators[field.id]?.regex}
            helpText={authValidators[field.id]?.helpText}
          />
        ))}
      </div>
      <button type="submit">
        {pathname === '/signup' ? '회원가입' : '로그인'}
      </button>
    </form>
  );
};

export default AuthForm;
