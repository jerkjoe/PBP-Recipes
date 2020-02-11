const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const initState = {
    selectedRecipes: [],
    requiredIngredients: []
}



export function cart(state=initState, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                selectedRecipes: [...state.selectedRecipes, action.payload.name],
                requiredIngredients: [...state.requiredIngredients, action.payload.ingredients],
            }
        case 'REMOVE_FROM_CART':
            return {
                requiredIngredients: state.requiredIngredients.filter(e=>{
                    return e[0] !== action.payload.name
                }),
                selectedRecipes: state.selectedRecipes.filter(e => {
                    return e !== action.payload.name
                }),
                
            }
        default:
            return state
    }
}





export function addToCart(data) {
    return {
        type: ADD_TO_CART,
        payload: data
    }
}

export function removeFromCart(data) {
    return {
        type: REMOVE_FROM_CART,
        payload: data
    }
}