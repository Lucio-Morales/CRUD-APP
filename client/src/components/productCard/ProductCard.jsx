import styles from "./ProductCard.module.css";

const ProductCard = ({ id, name, stock }) => {
  return (
    <div key={id} className={styles["product-card"]}>
      <h4>Name: {name}</h4>
      <p>Stock: {stock}</p>
    </div>
  );
};

export default ProductCard;
