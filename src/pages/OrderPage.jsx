import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import styles from "../styles/pages/OrderPage.module.css"


const OrderPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.checkout}>
          <Checkout/>
        </div>
        <div className={styles.cart}>
          <Cart/>
        </div>
      </div>
    </>
  );
};

export default OrderPage;