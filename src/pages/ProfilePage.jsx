import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from '../axios/axios';
import styles from '../styles/pages/ProfilePage.module.css';
import profilePlaceholder from '../assets/images/placeholder-profile.jpeg';

const ProfilePage = () => {
  const isLog = useSelector((state) => state.user.isLog);

  const [profile, setProfile] = useState([]);

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

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className={styles.profile}>
      <h2 className={styles.profile__title}>마이페이지</h2>
      <div className={styles.profile__info}>
        <img
          className={styles.profile__info_image}
          src={profilePlaceholder}
          alt="profile"
        />
        {isLog ? (
          <ul className={styles.profile__info_fieldContainer}>
            {profileFields.map((field) => {
              const { label, key } = field;
              return (
                <li key={field.id} className={styles.profile__info_field}>
                  <p>{label}</p>
                  <p>{profile[key]}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className={styles.profile__loginPrompt}>
            <p className={styles.profile__loginPrompt_text}>
              아직 로그인을 하지 않았어요
            </p>
            <Link to="/login" className={styles.profile__loginPrompt_link}>
              로그인하기
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProfilePage;
