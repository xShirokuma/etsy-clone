const GET_PRODUCTS = "products/GET_PRODUCTS"
const GET_SINGLEPRODUCT = "products/GET_SINGLEPRODUCT"


//action creator
const getProducts = (products) => ({
    type: GET_PRODUCTS,
    products
})

const getSingleProduct = (product) => ({
    type: GET_SINGLEPRODUCT,
    product
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

export const fetchSingleProduct = (productId) => async (dispatch) => {
    const res = await fetch(`/api/products/${productId}`)
    
    if (res.ok) {
        const product = await res.json();
        console.log(product)
        dispatch(getSingleProduct(product));
        return product
    }
}




const initialState = {
    allProducts: {},
    singleProduct: {}
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
        case GET_SINGLEPRODUCT:
            newState = { ...state}
            console.log("newState",newState)
            newState.singleProduct = { ...action.product }
            console.log(action.product.id)
            console.log("neewstate after",newState)
            return newState

        default:
            return state;
    }
}

export default productReducer
