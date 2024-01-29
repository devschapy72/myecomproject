import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/FilterReducer";

const FilterContext = createContext();

const initialSatate = {
    filterProducts: [],
    allProducts: [],
    gridView: true,
    sortingValue: "highest",
    filters: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    },
}

const FilterProvider = ({children}) => {

    const {products} = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialSatate)


    // GRID_VIEW
    const setGridView = () => {
        return dispatch({type: "SET_GRID_VIEW"})
    }

    // LIST_VIEW
    const setListView = () => {
        return dispatch({type: "SET_LIST_VIEW"})
    };

    // SORTING_FUNCTION
    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({type: "SORTING_VALUE", payload: userValue})
    };

    // UPDATE_FILTER_VALUE
    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        return dispatch({type: "UPDATE_FILTER_VALUE", payload: {name, value}})
    }


    // CLEAR_FILTERS
    const clearFilters = () => {
        dispatch({type: "CLEAR_FILTERS"})
    }

    useEffect(() => {
        dispatch({type: "FILTER_PRODUCTS"});
         dispatch({type: "SORTING_PRODUCTS"});
    }, [products, state.sortingValue, state.filters]);


    useEffect(() => {
      dispatch({type: "SET_FILTER_PRODUCTS", payload: products})
    }, [products]);




    return <FilterContext.Provider value={{...state, setGridView, setListView, sorting, updateFilterValue, clearFilters}}>
        {children}
    </FilterContext.Provider>
}

const useFilterContext = () => {
    return useContext(FilterContext);
};

export { FilterContext, FilterProvider, useFilterContext }