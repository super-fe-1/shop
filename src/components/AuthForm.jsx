import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { __signup, __login } from '../redux/modules/user';
import FormInput from './FormInput';

const AuthForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const pathname = location.pathname;

  const authFormFields =
    pathname === '/login'
      ? [
          { id: 'email', label: '이메일', type: 'email', required: true },
          {
            id: 'password',
            label: '비밀번호',
            type: 'password',
            required: true,
          },
        ]
      : [
          { id: 'email', label: '이메일', type: 'email', required: true },
          {
            id: 'password',
            label: '비밀번호',
            type: 'password',
            required: true,
          },
          { id: 'tel', label: '전화번호', type: 'tel', required: true },
          { id: 'address', label: '주소', type: 'text', required: true },
          { id: 'profileImg', label: '프로필', type: 'file', required: false },
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

    const formData = new FormData(e.target);
    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });

    if (pathname === '/signup') {
      dispatch(__signup(formValues));
    } else if (pathname === '/login') {
      dispatch(__login(formValues)).then((res) => {
        navigate('/');
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {authFormFields.map((field) => (
          <FormInput
            key={field.id}
            label={field.label}
            fieldData={field}
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
