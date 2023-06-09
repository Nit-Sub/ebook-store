import { createContext, useContext, useReducer } from "react"
import { filterReducer } from "../reducers";
const filterInitialState = {
    productList: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null
}
const filterContext = createContext(filterInitialState);
export const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filterReducer, filterInitialState);
    const initialProductList = (products) => {
        dispatch({
            type: "PRODUCT_LIST",
            payload: {
                products: products
            }
        })
    }
    const value = {
        products: state.productList,
        initialProductList
    }
    return (
      
            <filterContext.Provider value={value}>
                {children}
            </filterContext.Provider>
        
    )
}
export const useFilter = () => {
    const context = useContext(filterContext);
    return context;
}