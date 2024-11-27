import { Link } from 'react-router-dom';
import FormInput from '../components/FormInput';
import styles from '../styles/pages/ProfilePage.module.css';
import profilePlaceholder from '../assets/images/placeholder-profile.jpeg';

const ProfilePage = () => {
  const isLoggedIn = true;

  const FORM_INPUTS = [
    { label: '이메일', id: 'email', type: 'email' },
    { label: '이름', id: 'name', type: 'text' },
    { label: '성별', id: 'gender', type: 'radio' },
    { label: '전화번호', id: 'phone', type: 'tel' },
    { label: '주소', id: 'address', type: 'text' },
  ];

  return (
    <div className={styles.profile}>
      <h2 className={styles.profile__title}>마이페이지</h2>
      <div className={styles.profile__info}>
        <img
          className={styles.profile__image}
          src={profilePlaceholder}
          alt="profile"
        />
        {!isLoggedIn && (
          <div className={styles.profile__loginPrompt}>
            <p className={styles.profile__loginPrompt_text}>
              아직 로그인을 하지 않았어요
            </p>
            <Link to="/login" className={styles.profile__loginPrompt_link}>
              로그인하기
            </Link>
          </div>
        )}
        <form className={styles.profile__form}>
          {FORM_INPUTS.map((input) => (
            <FormInput key={input.id} label={input.label} />
          ))}
        </form>
      </div>
      <div className={styles.profile__menu}>
        <ul>
          <li>
            <button>장바구니</button>
          </li>
          <li>
            <button>로그아웃</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ProfilePage;
