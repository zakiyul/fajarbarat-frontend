import React from "react";
import { connect, useSelector } from "react-redux";
import { getProduct } from "../actions";
import CategoryComp from "../components/CategoryComp";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function CategoryPage(props) {
  const { dispatch } = props;

  React.useEffect(() => {
    dispatch(getProduct());
  }, []);

  const products = useSelector((state) => state.produk);

  const rumahTanggaProducts = products
    ? products.filter((product) => {
        return product.kategori.id === 1;
      })
    : null;
  const mebelProducts = products
    ? products.filter((product) => {
        return product.kategori.id === 3;
      })
    : null;
  const teknikBangunanProducts = products
    ? products.filter((product) => {
        return product.kategori.id === 8;
      })
    : null;
  const aksesorisProducts = products
    ? products.filter((product) => {
        return product.kategori.id === 9;
      })
    : null;

  const { params } = props.match;
  switch (params.category) {
    case "1":
      return (
        <div>
          <Navbar />
          <CategoryComp produk={rumahTanggaProducts} />
          <Footer />
        </div>
      );

    case "2":
      return (
        <div>
          <Navbar />
          <CategoryComp produk={mebelProducts} />
          <Footer />
        </div>
      );
    case "3":
      return (
        <div>
          <Navbar />
          <CategoryComp produk={teknikBangunanProducts} />
          <Footer />
        </div>
      );
    case "4":
      return (
        <div>
          <Navbar />
          <CategoryComp produk={aksesorisProducts} />
          <Footer />
        </div>
      );
    default:
      return (
        <div>
          <Navbar />
          <h1>tidak termasuk kategori</h1>
          <Footer />
        </div>
      );
  }
}
export default connect()(CategoryPage);
