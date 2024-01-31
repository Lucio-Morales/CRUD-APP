import ProductCard from "../productCard/ProductCard";

const ProductsList = ({ products }) => {
  console.log(products);
  return (
    <div>
      {products.length ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            stock={product.stock}
          />
        ))
      ) : (
        <>Loading products..</>
      )}
    </div>
  );
};

export default ProductsList;
