const CartReducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_CART":
            let {id, color, amount, product} = action.payload;

            // TACKLE_THE_EXISTING_PRODUCT
            let existingProduct = state.cart.find((curItem) => curItem.id == id + color)

            if(existingProduct){
              let updatedProduct = state.cart.map((curELm) => {
                if(curELm.id == id + color ){
                    let newAmount = curELm.amount + amount;

                    if(newAmount >= curELm.max) {
                        newAmount = curELm.max;
                    }
                    return{
                        ...curELm,
                        amount: newAmount,
                    };
                }else{
                    return curELm;
                }
              })
              return{
                ...state,
                cart: updatedProduct,
              };
            }else{  
            let cartProduct;

            cartProduct = {
                id: id + color,
                name: product.name,
                color,
                amount,
                image: product.image[0].url,
                price: product.price,
                max: product.stock,
            };

            return{
                ...state,
                cart: [...state.cart, cartProduct],
            };
        };

        // DECREASE_INCREASE_ITEMS
        case "SET_DECREASE":
            let decreaseProduct = state.cart.map((curELm) => {
                if(curELm.id === action.payload){
                    let decAmount = curELm.amount - 1;

                    if(decAmount <= 1){
                        decAmount = 1
                    }

                    return{
                        ...curELm,
                        amount: decAmount,
                    };
                }else{
                    return curELm;
                }
            });
            return{
                ...state,
                cart: decreaseProduct
            };


            case "SET_INCREASE":
            let increaseProduct = state.cart.map((curELm) => {
                if(curELm.id === action.payload){
                    let incAmount = curELm.amount + 1;

                    if(incAmount >= curELm.max){
                        incAmount = curELm.max
                    }

                    return{
                        ...curELm,
                        amount: incAmount,
                    };
                }else{
                    return curELm;
                };
            })
            return{
                ...state,
                cart: increaseProduct
            };
            
            // REMOVE_ITEMS
            case  "REMOVE_ITEM":
                let updatedCart = state.cart.filter((curELm) => curELm.id !== action.payload)

            return{
                ...state,
                cart: updatedCart,
            };

            // CLEAR_CART_ITEMS
            case "CLEAR_CART_ITEMS":
                return{
                    ...state,
                    cart: []
                };
            
                // CART_ITEMS_TOTAL_PRICE
                case "CART_ITEMS_TOTAL_PRICE":
                    let { total_item, total_price } = state.cart.reduce((accum, curElm) => {
                      let {price, amount} = curElm;
                      
                      accum.total_item += amount;
                      accum.total_price += price * amount;

                      return accum
                    }, 
                    {
                      total_item: 0,
                      total_price: 0,
                    });

                    return{
                        ...state,
                        total_item,
                        total_price,
                    };
    
        default:
            return state
    }
 
}

export default CartReducer