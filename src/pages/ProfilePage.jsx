import { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from '../axios/axios';
import styles from '../styles/pages/ProfilePage.module.css';
import Alert from '../components/Alert';
import profilePlaceholder from '../assets/images/placeholder-profile.jpeg';

const ProfilePage = () => {
  const isLog = useSelector((state) => state.user.isLog);

  const [profile, setProfile] = useState([]);
  const [isAlertShow, setIsAlertShow] = useState(false);

  const closeAlert = useCallback(() => {
    setIsAlertShow(false);
  }, []);

  const profileFields = [
    { label: '이메일', key: 'email' },
    { label: '전화번호', key: 'tel' },
    { label: '주소', key: 'address' },
    { label: '성별', key: 'gender' },
  ];

  const getProfile = async () => {
    await axios
      // .get(`/mypage/info`)
      .get(`/profile`)
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setTimeout(() => {
      window.location.reload('/');
    }, 100);
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <div className={styles.profile}>
        <h2 className={styles.profile__title}>마이페이지</h2>
        <div className={styles.profile__info}>
          <img
            className={styles.profile__info_image}
            src={profilePlaceholder}
            alt="profile"
          />
          {isLog ? (
            <>
              <ul>
                {profileFields.map((field, i) => {
                  const { label, key } = field;
                  return (
                    <li key={i} className={styles.profile__info_field}>
                      <p className={styles.profile__info_label}>{label}</p>
                      <p className={styles.profile__info_value}>
                        {profile[key]}
                      </p>
                    </li>
                  );
                })}
              </ul>
              <button
                className={styles.profile__logout}
                onClick={() => setIsAlertShow(true)}
              >
                로그아웃
              </button>
            </>
          ) : (
            <div className={styles.profile__loginPrompt}>
              <p>아직 로그인을 하지 않았어요</p>
              <Link to="/login" className={styles.profile__loginPrompt_link}>
                로그인하기
              </Link>
            </div>
          )}
        </div>
      </div>
      {isLog && (
        <Alert isAlertShow={isAlertShow} onClose={closeAlert}>
          <div className={styles.alert__content}>
            <p className={styles.alert__content_text}>로그아웃 하시겠습니까?</p>
            <div className={styles.alert__button_wrapper}>
              <button
                onClick={handleLogout}
                className={`${styles.alert__button} ${styles.alert__confirm}`}
              >
                확인
              </button>
              <button
                onClick={closeAlert}
                className={`${styles.alert__button} ${styles.alert__cancel}`}
              >
                취소
              </button>
            </div>
          </div>
        </Alert>
      )}
    </>
  );
};
export default ProfilePage;
