import * as actions from "../actions/index";

const initialState = {
  isLoading: false,
  error: "",
  products: [],
  product: {
    quantity: 15,
    description: [
      "Bluetooth Wireless Headphones with 25H Playtime & Thumping Bass",
      "This bluetooth wireless headphone features a strong, lightweight design crafted with premium materials. The cushioned adjustable headband lets you dial in the perfect fit, while soft memory foam ear cushions mold to your ears.",
    ],
    review: [],
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71lczMQC1bL._SL1178_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71x1z74IGaL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/6122uJigBvL._SL1080_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71mVHd-mpDL._SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51rIKFQJvuL._SL1000_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71LWyyjwyDL._SL1500_.jpg",
    ],
    _id: "60ee7334a1f1f51d68aa2deb",
    name: "Fire-Boltt Blast 1400 Headphones",
    category: "Headphones",
    price: 2499,
    specification: {
      Brand: "‎Fire-Boltt",
      Manufacturer: "‎Fire-Boltt, Boltt Games Pvt Ltd",
      Model: "‎BH1400",
    },
    rating: 4,
    __v: 0,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_PRODUCTS_REQUEST:
      return {
        ...state,

        isLoading: true,
        error: "",
        products: [],
        product: {},
      };
    case actions.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        products: action.payload,
        
      };
    case actions.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        products: [],
        product: {},
      };

    case actions.GET_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: "",
        product: {},
      };

    case actions.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        product: action.payload,
      };

    case actions.GET_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        product: {},
      };
    case actions.GET_PRODUCTS_BY_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: "",
        products: [],
        product: {},
      };
    case actions.GET_PRODUCTS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        products: action.payload,
      };
    case actions.GET_PRODUCTS_BY_CATEGORY_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        products: [],
      };
    default:
      return state;
  }
};

export default reducer;
