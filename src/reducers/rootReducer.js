import {
  GET_BANNERS,
  GET_KATEGORI_CARD,
  GET_PRODUCTS,
  GET_DETAIL_PRODUCT,
} from "../actions";

const initState = {
  banner: false,
  kategoriCard: false,
  produk: false,
  detailProduk: false,
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_BANNERS:
      return {
        ...state,
        banner: action.payload,
      };
    case GET_KATEGORI_CARD:
      return {
        ...state,
        kategoriCard: action.payload,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        produk: action.payload,
      };
    case GET_DETAIL_PRODUCT:
      return {
        ...state,
        detailProduk: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
