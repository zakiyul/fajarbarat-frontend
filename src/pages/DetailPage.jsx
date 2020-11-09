import React from "react";
import NavbarComp from "../components/Navbar";
import Footer from "../components/Footer";
import { connect, useSelector } from "react-redux";
import { getDetailProduct } from "../actions";

function DetailPage(props) {
  const { params } = props.match;
  const { dispatch } = props;

  React.useEffect(() => {
    dispatch(getDetailProduct(params.id));
  }, []);

  const produk = useSelector((state) => state.detailProduk);

  return (
    <div>
      <NavbarComp />
      <div className="container my-5">
        {produk ? (
          <div className="card p-3">
            <div className="row">
              <div className="col-md-6 col-12">
                <img
                  src={produk.gambar}
                  alt="gambar"
                  className="img-fluid img-thumbnail"
                />
              </div>
              <div className="col-md-6 col-12">
                <h5 className="card-title">{produk.nama}</h5>
                <span class="badge badge-pill badge-primary mb-5">
                  {produk.kategori.nama}
                </span>
                <p>{produk.deskripsi}</p>
                <button className="btn btn-block btn-success">Whatsapp</button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
}

export default connect()(DetailPage);
