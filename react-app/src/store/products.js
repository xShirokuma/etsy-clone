const GET_PRODUCTS = "products/GET_PRODUCTS"
const CREATE_PRODUCT = "products/CREATE_PRODUCT"
const EDIT_PRODUCT = "products/EDIT_PRODUCT"

//action creator
const getProducts = (products) => ({
    type: GET_PRODUCTS,
    products
})
const createProduct = (newProduct) => ({
    type: CREATE_PRODUCT,
    newProduct
})
const editProduct = (editProduct) => ({
    type: EDIT_PRODUCT,
    editProduct
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
        newProduct = response.json();
        await dispatch(createProduct(newProduct))
    } 
    
    return newProduct;  
};

export const thunkEditProduct = (product) => async (dispatch) => {
    console.log("product in thunk", product)
    const response = await fetch(`/api/products/${product.id}`,{
        method:'PUT',
        headers:{ "Content-Type" : 'application/json' },
        body: JSON.stringify(product)
    })

    if(response.ok) {
        const Product_edit = await response.json();
        dispatch(editProduct(Product_edit))
        return Product_edit;  
    };
}




const initialState = {}

const productsReducer = (state = initialState, action) => {
    let newState = {}
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
        case EDIT_PRODUCT:
            newState = { ...state}
            newState[action.editProduct.id] = action.editProduct
            return newState
        default:
            return state;
    }
}

export default productsReducer
