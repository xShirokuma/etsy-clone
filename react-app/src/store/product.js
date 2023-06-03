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
        dispatch(getProducts(products));
        return products
    }
}

const initialState = {}

const productReducer = (state = initialState, action) => {
    const newState = {}
    switch (action.type) {
        case GET_PRODUCTS:
        newState = { ...state }
        action.products.forEach(product => {
            newState[product.id] = product
        })
    }
}

export default productReducer
