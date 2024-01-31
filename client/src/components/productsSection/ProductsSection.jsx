import { useEffect, useState } from "react";
import ProductsList from "../productsList/ProductsList";

const fetchProducts = async (setProducts) => {
  try {
    const response = await fetch("http://localhost:3001/product/all");
    if (response.ok) {
      const data = await response.json();

      setProducts(data);
    } else {
      console.error("Error al obtener productos del servidor");
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
};

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts(setProducts);
  }, []);
  return (
    <div>
      <ProductsList products={products} />
    </div>
  );
};

export default ProductsSection;
