const GET_PRODUCTS = "products/GET_PRODUCTS"

//action creator
const getProducts = (products) => {
    return {
        type: GET_PRODUCTS,
        products
    }
}

//Thunk Action Creators
export const fetchProducts = () => async (dispatch) => {
    const res = await fetch("/api/products")
    
    if (res.ok) {
        const {products} = await res.json();
        console.log(products);
        dispatch(getProducts(products));
    }
}

// export const fetchSingleProduct = (productId) => async (dispatch) => {
//     const res = await fetch(`/api/products/${productId}`)
    
//     if (res.ok) {
//         const product = await res.json();
//         console.log(product)
//         dispatch(getSingleProduct(product));
//         return product
//     }
// }

const initialState = {
    // allProducts: {},
    // singleProduct: {}
}

const productReducer = (state = initialState, action) => {
    const newState = {}
    switch (action.type) {
        case GET_PRODUCTS:
            console.log(action.products);
            action.products.forEach(product => {
                console.log('test');
                console.log(product.id);
                console.log(product);
                newState[product.id] = product
            })
            console.log(newState);
            return newState
        // case GET_SINGLEPRODUCT:
        //     newState = { ...state}
        //     console.log("newState",newState)
        //     newState.singleProduct = { ...action.product }
        //     console.log(action.product.id)
        //     console.log("neewstate after",newState)
        //     return newState
        default:
            return state;
    }
}

export default productReducer
