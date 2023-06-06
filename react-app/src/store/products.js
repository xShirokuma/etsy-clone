const GET_PRODUCTS = "products/GET_PRODUCTS"
const CREATE_PRODUCT = "products/CREATE_PRODUCT"

//action creator
const getProducts = (products) => ({
    type: GET_PRODUCTS,
    products
})
const createProduct = (newProduct) => ({
    type: CREATE_PRODUCT,
    newProduct
})

//Thunk Action Creators
export const fetchProducts = () => async (dispatch) => {
    const res = await fetch("/api/products")
    
    if (res.ok) {
        const {products} = await res.json();
        console.log(products);
        dispatch(getProducts(products));
    }
}
export const thunkNewProduct = (product,images) => async (dispatch) => {
    console.log("testthunk")
    const response = await fetch('/api/products/new',{
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

const initialState = {}

const productsReducer = (state = initialState, action) => {
    const newState = {}
    switch (action.type) {
        case GET_PRODUCTS:
            action.products.forEach(product => {
                newState[product.id] = product
            })
            return newState
        case CREATE_PRODUCT:
            console.log("test")
            newState = { ...state}
            newState[action.newProduct.id] = action.newProduct
            return newState
        default:
            return state;
    }
}

export default productsReducer
