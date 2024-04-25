import { GET_PRODUCTS, GET_PRODUCTS_BY_ID, POST_PRODUCTS, GET_PRODUCTS_BY_NAME, PUT_PRODUCTS, DELETE_PRODUCT } from "./Actions"

let initialState = {
  allProducts: [],
  product: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
    case GET_PRODUCTS_BY_ID:
      return {
        ...state,
        products: action.payload,
      };
    case POST_PRODUCTS:
      return {
        ...state,
      };
    case GET_PRODUCTS_BY_NAME:
      return {
        ...state,
        allProducts: action.payload,
      };
    case PUT_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        allProducts: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
