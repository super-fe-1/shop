import Cart from "../components/Cart";
import PersonalInformation from "../components/PersonalInformation";
import styles from "../styles/pages/OrderPage.module.css"
import {useLocation} from "react-router-dom";


const OrderPage = () => {
  const location = useLocation();
  const cartData = location.state?.cartData || [];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.checkout}>
          <PersonalInformation/>
        </div>
        <div className={styles.cart}>
          <Cart cartData = {cartData}/>
        </div>
      </div>
    </>
  );
};

export default OrderPage;