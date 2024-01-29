import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const getLocalStorgeData = () => {
    let localCartData = localStorage.getItem("myCart");

    const parsedData = JSON.parse(localCartData);
    if(!Array.isArray(parsedData)) return [];
    return parsedData;
};

const initialState = {
    cart: getLocalStorgeData(),
    total_item: "",
    total_price: "",
    shipping_fee: 50000,
}


const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const addtoCart = (id, color, amount, product) => {
        dispatch({type: "ADD_TO_CART", payload: {id, color, amount, product}})
    };

    // DECREASE_INCREASE_ITEMS
    const setDecrement = (id) => {
       dispatch({type: "SET_DECREASE", payload: id})
    }

    const setIncrement = (id) => {
       dispatch({type: "SET_INCREASE", payload: id})
    }

    // REMOVE_ITEMS_
    const removeItem = (id) => {
        dispatch({type: "REMOVE_ITEM", payload: id})
    };

    // CLEAR_CART_ITEMS
    const clearCart = () => {
        dispatch({type: "CLEAR_CART_ITEMS"});
    }

    // LOCAL_STORAGE
    useEffect(() => {
        dispatch({type: "CART_ITEMS_TOTAL_PRICE"})
        localStorage.setItem("myCart", JSON.stringify(state.cart))
    }, [state.cart])

    return <CartContext.Provider value =
    {{...state, 
    addtoCart, 
    removeItem, 
    clearCart, 
    setDecrement, 
    setIncrement}}>
        {children}
    </CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext);
};

export {CartContext, CartProvider, useCartContext}