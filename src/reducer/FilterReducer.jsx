const FilterReducer = (state, action) => {
    switch (action.type) {
        case "SET_FILTER_PRODUCTS":
            let priceArr = action.payload.map((curELm) => curELm.price)
            let maxPrice = Math.max(...priceArr)
  
            return{
                ...state,
                filterProducts: [...action.payload],
                allProducts: [...action.payload],
                filters: {...state.filters, maxPrice, price: maxPrice},
            };
            
            case "SET_GRID_VIEW":
            return{
                ...state,
                gridView: true
            };

            case "SET_LIST_VIEW":
                return{
                    ...state,
                    gridView: false
                };


                // SORTING_VALUE_START
                case "SORTING_VALUE":
            
                  return{
                    ...state,
                    sortingValue: action.payload,
                  };
                
                  case "SORTING_PRODUCTS":
                    let newSortData;

                    const { filterProducts, sortingValue } = state;
                    let tempSortDataProduct = [...filterProducts];
                    

                    const sortingProducts = (a, b) => {
                        if(sortingValue === "lowest") {
                            return a.price - b.price;
                        };

                        if(sortingValue === "highest") {
                            return b.price - a.price;
                        };

                        if(sortingValue === "a-z") {
                            return a.name.localeCompare(b.name)
                        };

                        if(sortingValue === "z-a") {
                            return  b.name.localeCompare(a.name)
                        }    
                    };

                    newSortData = tempSortDataProduct.sort(sortingProducts);

                    return{
                        ...state,
                        filterProducts: newSortData,
                    };


                    // UPDATE_FILTER_VALUE

                    case "UPDATE_FILTER_VALUE":
                        const {name, value} = action.payload;

                        return{
                            ...state,
                            filters: {
                                ...state.filters,
                                [name]: value,
                            }
                        };

                        case "FILTER_PRODUCTS": 
                        let { allProducts } = state;
                        let tempFilterProduct = [...allProducts];

                        const {text, category, company, color, price} = state.filters;
                        if(text){
                            tempFilterProduct = tempFilterProduct.filter((curELm) => {
                                return curELm.name.toLowerCase().includes(text);
                            })
                        };

                        if(category !== "all"){
                            tempFilterProduct = tempFilterProduct.filter((curELm) => {
                                return curELm.category === category;
                            })
                        };

                        if(company !== "all"){
                            tempFilterProduct = tempFilterProduct.filter((curELm) => {
                                return curELm.company.toLowerCase() === company.toLowerCase();
                            })
                        };

                        if(color !== "all"){
                            tempFilterProduct = tempFilterProduct.filter((curELm) => curELm.colors.includes(color));
                        };
                        if(price === 0){
                             tempFilterProduct = tempFilterProduct.filter((curELm) => curELm.price == price)
                        } else{
                          tempFilterProduct = tempFilterProduct.filter((curELm) => curELm.price <= price)
                        }

                        return{
                            ...state,
                            filterProducts: tempFilterProduct,
                        };

                        // CLEAR_FILTEST
                        case "CLEAR_FILTERS":
                            return{
                                ...state,
                                filters: {
                                    ...state.filters,
                                    text: "",
                                    category: "all",
                                    company: "all",
                                    color: "all",
                                    maxPrice: 0,
                                    price: state.filters.maxPrice,
                                    minPrice: state.filters.maxPrice,
                                }
                            }

                       
    
        default:
           return state;
    };
}

export default FilterReducer