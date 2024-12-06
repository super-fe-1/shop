import styles from '../styles/components/Cart.module.css';

//cartData가 불러와지지 않음
const Cart = ({ cartData }) => {
  const updateQuantity = (id, increment) => {
    console.log(`수량 변경: ${id}, 증가: ${increment}`);
  };

  const subtotal = cartData.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shippingFee = 3000; // 배송비
  const tax = subtotal * 0.1; // 세금 (10%)
  const total = subtotal + shippingFee + tax;

  return (
    <div className={styles.cart__container}>
      <h1 className={styles.cart__title}>결제 금액</h1>
      <div className={styles.cart__items}>
        {cartData?.map((item) => (
          <div key={item.title} className={styles.cart__item}>
            <div>
              <p>{item.title}</p>
              {/* {Object.entries(item.sizeOption).map(
                ([key, value]) => `${key}: ${value}`
              )} */}
            </div>
            <div className={styles.cart__controls}>
              <button
                onClick={() => updateQuantity(item.id, false)}
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, true)}>+</button>
            </div>
            <p>{(item.price * item.quantity).toFixed(0)} 원</p>
          </div>
        ))}
      </div>

      <div className={styles.cart__summary}>
        <div className={styles.cart__costs}>
          <p>합계 (세금 및 배송비 제외)</p>
          <p>{subtotal.toFixed(0)} 원</p>
        </div>
        <div className={styles.cart__costs}>
          <p>배송비</p>
          <p>{shippingFee.toFixed(0)} 원</p>
        </div>
        <div className={styles.cart__costs}>
          <p>세금</p>
          <p>{tax.toFixed(0)} 원</p>
        </div>
        <hr className={styles.cart__hr} />
        <div className={styles.cart__total}>
          <p>총 상품 금액</p>
          <p>{total.toFixed(0)} 원</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
