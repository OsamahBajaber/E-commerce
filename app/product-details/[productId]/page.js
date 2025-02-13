"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductApis from "../../_utils/ProductApis";
import BreadCrumbs from "../../_component/BreadCrumbs";
import ProductBanner from "./ProductBanner";
import ProductInfo from "./ProductInfo";
import ProductList from "../../_component/ProductList";

function ProductDetails() {
  const params = useParams();

  const [productDetails, setProductDetails] = useState({});
  const [productsCategory, setProductsCategory] = useState([]);
  useEffect(() => {
    if (params.productId) {
      getProductById_();
    }
  }, [params.productId]);

  const getProductById_ = async () => {
    try {
      const response = await ProductApis.getProductById(params.productId);
      if (response?.data?.data) {
        console.log("Product Details:", response.data.data);
        setProductDetails(response.data.data);
        getProductsByCategory_(response.data.data.category);
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const getProductsByCategory_ = async (category) => {
    try {
      const response = await ProductApis.getProductsByCategory(category);
      if (response?.data?.data) {
        console.log("Similar Products:", response.data.data);
        setProductsCategory(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching similar products:", error);
    }
  };
  // const getProductById_ = async () => {
  //   try {
  //     const response = await ProductApis.getProductById(params.productId);
  //     if (response && response.data) {
  //       console.log(response.data);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching product:", error);
  //   }
  // };
  if (!productDetails) {
    return <p className="text-center my-10">Loading product details...</p>;
  }
  return (
    <div className="mx-20 my-6 md:mx-12 md:my-4 sm:mx-10 sm:my-2">
      <BreadCrumbs path={params.productId} />

      {/* Product Details */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-5">
        <ProductBanner productBanner={productDetails} />
        <ProductInfo productInfo={productDetails} />
      </div>
      {/* ===== Product Details ===== */}
      {/* Similar Products  */}
      <div className="mt-10 gap-4">
        <h2 className="mb-5">Similar Products</h2>
        <ProductList productList={productsCategory} />
      </div>
      {/* ===== Similar Products ===== */}
    </div>
  );
}

export default ProductDetails;
