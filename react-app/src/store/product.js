const GET_PRODUCTS = "products/GET_PRODUCTS"

//action creator
const getProducts = (products) => ({
    type: GET_PRODUCTS,
    products
})


//Thunk Action Creators
export const fetchProducts = () => async (dispatch) => {
    const res = await fetch("/api/products")

    if (res.ok) {
        const products = await res.json();
        // console.log(products)
        dispatch(getProducts(products));
        return products
    }
}

const initialState = {
    allProducts: {}
}

const productReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case GET_PRODUCTS:
        console.log(action.products.products)
        newState = { ...state }
        action.products.products.forEach(product => {
            newState.allProducts[product.id] = product
        })
        return newState
    default:
        return state;

    }
}

export default productReducer
