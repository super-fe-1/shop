import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { __signup, __login } from '../redux/modules/user';
import FormInput from './FormInput';
import cleanPhoneNumber from '../utils/cleanPhoneNumber';

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
          {
            id: 'profileImg',
            label: '프로필 이미지',
            type: 'file',
            required: false,
          },
          {
            id: 'gender',
            label: '성별',
            type: 'radio',
            options: [
              { value: 'M', label: '남성' },
              { value: 'F', label: '여성' },
            ],
            required: true,
          },
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
      dispatch(__login(formValues));
    }
  };

  return (
    <div className={styles.authFormContainer}>
      <form onSubmit={handleSubmit} className={styles.authForm}>
        <h2 className={styles.authFormTitle}>
          {pathname === '/signup' ? '회원가입' : '로그인'}
        </h2>
        <div className={styles.authFormField}>
          {authFormFields.map((field) =>
            field.type === 'radio' ? (
              <div key={field.id} className={styles.authFormRadioGroup}>
                <label>{field.label}</label>
                <div className={styles.authFormRadioOptions}>
                  {field.options.map((option) => (
                    <label
                      key={option.value}
                      className={styles.authFormRadioOption}
                    >
                      <input
                        type="radio"
                        className={styles.authFormRadioInput}
                        name={field.id}
                        value={option.value}
                        required={field.required}
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>
            ) : (
              <FormInput
                key={field.id}
                label={field.label}
                fieldData={field}
                regex={authValidators[field.id]?.regex}
                helpText={authValidators[field.id]?.helpText}
              />
            )
          )}
        </div>
        <button type="submit" className={styles.authFormButton}>
          {pathname === '/signup' ? '회원가입' : '로그인'}
        </button>
        <div className={styles.authFormFooter}>
          <p className={styles.authFormFooterText}>
            {pathname === '/signup'
              ? '이미 계정이 있으신가요?'
              : '아직 계정이 없으신가요?'}{' '}
            <a
              href={pathname === '/signup' ? '/login' : '/signup'}
              className={styles.authFormFooterLink}
            >
              {pathname === '/signup' ? '로그인' : '회원가입'}
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
