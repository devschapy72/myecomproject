const ProductReducer = (state, action) => {
  switch (action.type) {
    case  "LOADING_DATA":
      return{
        ...state,
        isLoading: true,
      };

      case "MY_PRODUCT_DATA":
        const featureProduct = action.payload.filter((curElm) => {
          return curElm.featured === true;
        });
        return{
          ...state,
          isLoading: false,
          products: action.payload,
          featureProducts: featureProduct,
        }

      case "ERRPR_DATA":
        return{
          ...state,
          isLoading: false,
          isError: true,
        }
      
      // MY_2ND_API_CALL_FOR_SINGLE_PAGE
      case "SINGLE_LOADING":
        return{
          ...state,
          singleLoading: true,
        };

        case "SINGLE_PAGE_DATA":
        return{
          ...state,
          singleLoading: false,
          singleProduct: action.payload,
        };

        case "SINGLE_ERROR":
          return{
            ...state,
            singleLoading: false,
            isError: true
          };
  
    default:
     return state;
  }
}

export default ProductReducer