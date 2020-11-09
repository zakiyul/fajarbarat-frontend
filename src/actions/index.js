import axios from "axios";

export const GET_BANNERS = "GET_BANNERS";
export const GET_KATEGORI_CARD = "GET_KATEGORI_CARD";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_DETAIL_PRODUCT = "GET_DETAIL_PRODUCT";

export const getBanners = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8000/api/banner/`)
      .then((res) => {
        dispatch({
          type: GET_BANNERS,
          payload: res.data,
        });
      })
      .catch(() => {
        dispatch({
          type: GET_BANNERS,
          payload: false,
        });
      });
  };
};

export const getKategoriCard = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8000/api/kategoriCard/`)
      .then((res) => {
        dispatch({
          type: GET_KATEGORI_CARD,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_KATEGORI_CARD,
          payload: false,
        });
      });
  };
};

export const getProduct = () => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8000/api/produk/`)
      .then((res) => {
        dispatch({
          type: GET_PRODUCTS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_PRODUCTS,
          payload: false,
        });
      });
  };
};

export const getDetailProduct = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:8000/api/produk/${id}`)
      .then((res) => {
        dispatch({
          type: GET_DETAIL_PRODUCT,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_DETAIL_PRODUCT,
          payload: false,
        });
      });
  };
};
