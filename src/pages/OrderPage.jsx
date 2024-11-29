import Cart from "../components/Cart";
import PersonalInformation from "../components/PersonalInformation";
import styles from "../styles/pages/OrderPage.module.css"


const OrderPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.checkout}>
          <PersonalInformation/>
        </div>
        <div className={styles.cart}>
          <Cart/>
        </div>
      </div>
    </>
  );
};

export default OrderPage;