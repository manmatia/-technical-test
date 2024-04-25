
import axios from "axios";
import Swal from "sweetalert2";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_BY_ID = "GET_PRODUCTS_BY_ID";
export const POST_PRODUCTS = "POST_PRODUCTS";
export const GET_PRODUCTS_BY_NAME = "GET_PRODUCTS_BY_NAME";
export const PUT_PRODUCTS = "PUT_PRODUCTS";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export function getProducts() {
    return async function (dispatch) {
      try {
        const response = await axios("/");
        dispatch({
          type: GET_PRODUCTS,
          payload: response.data,
        });
      } catch (error) {
        alert(Error.message);
      }
    };
  }

  export function getReviewById(id) {
    return async function (dispatch) {
      try {
        const response = await axios.get(`/${id}`);
        dispatch({
          type: GET_PRODUCTS_BY_ID,
          payload: response.data,
        });
      } catch (error) {
        alert(error.message);
      }
    };
  }


  export function postProducts(createProduct) {
    return async function (dispatch) {
      try {
        await axios.post(`/`, createProduct);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your product has been created successfully",
          showConfirmButton: false,
        });
        return dispatch({
          type: POST_PRODUCTS,
        });
      } catch (error) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "There is already a product with that name",
          showConfirmButton: true,
        });
      }
    };
  }

  export function getProductsByName(name) {
    return async function (dispatch) {
      try {
        const response = await axios(`/?name=${name}`);
        dispatch({
          type: GET_PRODUCTS_BY_NAME,
          payload: response.data,
        });
      } catch (error) {
        console.error(error.message);
      }
    };
  }

  export function editProducts(
    id,
    name,
    price,
    sale,
    description,
    series,
    category,
    colorImage
  ) {
    return async function (dispatch) {
      try {
        const response = await axios.put(`/${id}`, {
          name,
          price,
          sale,
          description,
          series,
          category,
          colorImage,
        });
        dispatch({
          type: PUT_PRODUCTS,
          payload: response.data,
        });
      } catch (error) {
        alert(error.message);
      }
    };
  }

  export function deleteProduct(id) {
    return async function (dispatch) {
      try {
        const response = await axios.delete(`/products/${id}`);
        dispatch({
          type: DELETE_PRODUCT,
          payload: response.data,
        });
      } catch (error) {
        alert(error.message);
      }
    };
  }