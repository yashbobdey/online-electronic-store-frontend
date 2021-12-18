export const FETCH = "FETCH";
export const DELETE = "DELETE";
export const GET_PRODUCT = "GET_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const FETCHORDERS = "FETCHORDERS";
const getProducts = (payload) => {
  return {
    type: FETCH,
    payload,
  };
};
export const fetchProducts = () => {
  return (dispatch) => {
    fetch("http://localhost:8080/products", {
      "content-type": "application/json",
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        dispatch(getProducts(response.data));
      });
  };
};

const deleteProduct = (payload) => {
  return {
    type: DELETE,
    payload,
  };
};
export const deleteOne = (product) => {
  return (dispatch) => {
    fetch("http://localhost:8080/products/" + product.id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response.data);
        dispatch(deleteProduct(response));
      });
  };
};

export const getOneProduct = (payload) => {
  return {
    type: GET_PRODUCT,
    payload,
  };
};

export const getProduct = (id) => {
  return (dispatch) => {
    fetch("http://localhost:8080/products/" + id, {
      "content-type": "application/json",
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        dispatch(getOneProduct(response.data));
      });
  };
};

export const updateOneProduct = (payload) => ({
  type: UPDATE_PRODUCT,
  payload,
});

export const updateProduct = (product) => {
  return (dispatch) => {
    fetch("http://localhost:8080/products/" + product._id, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        price: product.price,
        quantity: product.quantity,
        rating: product.rating,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response.data);
        dispatch(updateOneProduct(response));
      });
  };
};
const getOrders = (payload) => {
  return {
    type: FETCHORDERS,
    payload,
  };
};
export const fetchOrders = () => {
  return (dispatch) => {
    fetch("http://localhost:8080/orders", {
      "content-type": "application/json",
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("inside admin actions", response);
        dispatch(getOrders(response.data));
      });
  };
};
