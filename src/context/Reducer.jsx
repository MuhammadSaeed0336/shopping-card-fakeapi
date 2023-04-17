
const reducer = (state, action) =>
{
  switch(action.type){
    case 'Add-Product':
      return {
        ...state,
        products: action.payload
      }
    case 'ADD_CART':
      return{
        ...state,
        cart:[...state.cart, {...action.payload, qty:1}]
      }
    case 'REMOVE_CART':
      return{
        ...state,
        cart:[...state.cart.filter((e)=> e.id !== action.payload.id)] 
      }

      default:
      return state
  }
}

export default reducer;