const { default: axiosClient } = require("./axiosClient");

const getLatestProducts = () => axiosClient.get("/product?populate=*");

// const getProductById = (id) => {
//   axiosClient.get(`/products/${id}?populate=*`);
// };

const getProductById = (id) => axiosClient.get(`/product/${id}?populate=*`);

const getProductsByCategory = (category) =>
  axiosClient.get(`/product?filters[category][$eq]=${category}&populate=*`);

export default { getLatestProducts, getProductById, getProductsByCategory };
