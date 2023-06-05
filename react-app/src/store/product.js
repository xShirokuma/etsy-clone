const GET_PRODUCTS = "products/GET_PRODUCTS"
const GET_SINGLEPRODUCT = "products/GET_SINGLEPRODUCT"
const CREATE_PRODUCT = "products/CREATE_PRODUCT"


//action creator
const getProducts = (products) => ({
    type: GET_PRODUCTS,
    products
})

const getSingleProduct = (product) => ({
    type: GET_SINGLEPRODUCT,
    product
})

const createProduct = (newProduct) => ({
    type: CREATE_PRODUCT,
    newProduct
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

export const thunkNewProduct = (product,images) => async (dispatch) => {
    console.log("testthunk")
    const response = await fetch('/api/products',{
        method:'POST',
        headers:{ "Content-Type" : 'application/json' },
        body: JSON.stringify(product)
    })

    let newProduct 
    if(response.ok) {
        newProduct = await response.json();
        for(let i = 0; i < images.length; i++){
            const res = await fetch (`/api/products/${newProduct.id}/images`,{
                method:'POST',
                headers:{ "Content-Type" : 'application/json' },
                body: JSON.stringify(images[i])
            })
        } 
        dispatch(createProduct(newProduct))
    } 
    
    return newProduct;  
};



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
        case CREATE_PRODUCT:
            console.log("test")
            newState = { ...state}
            newState.allProducts[action.newProduct.id] = action.newProduct
            return newState
        default:
            return state;
    }
}

export default productReducer
