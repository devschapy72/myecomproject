import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios"
import reducer from "../reducer/ProductReducer";




const ProductsContex = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  singleLoading: false,
  singleProduct: {},
}


const ProductsProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const getProduct = async(url) => {
    dispatch({type: "LOADING_DATA"});
   try{
    const resp = await axios.get(url);
    const product = await resp.data;
    dispatch({type: "MY_PRODUCT_DATA", payload: product})
   }catch(error){
    dispatch({type: "ERRPR_DATA"});
   }
  };

  // MY_2ND_API_CALL_FOR_SINGLE_PAGE
  const getSinglePage = async(url) => {
      dispatch({type: "SINGLE_LOADING"})
    try{
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({type: "SINGLE_PAGE_DATA", payload: singleProduct})
    }catch(error){
      dispatch({type: "SINGLE_ERROR"})
    }
  }

  useEffect(() => {
    getProduct(API);
  }, []);

  return <ProductsContex.Provider value={{...state, getSinglePage}}>
    {children}
  </ProductsContex.Provider>
}


// CUSTOM_HOOK
const useProductContext = () => {
  return useContext(ProductsContex);
}

export {ProductsContex, ProductsProvider, useProductContext}