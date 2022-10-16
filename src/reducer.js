export const initialState = {
    basket: [],
};

//Selector

export const getBasketTotal = (basket) => 
basket.reduce((amount, item) => item.price + amount, 0);

export const upDateBasketQuantity = (quantity) =>
quantity.reduce((amount, item) => item.quantity + amount, 0)

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            const item = state.basket.includes(
                action.id
              );
            
              if (item) {
                return {
                  ...state,
                  basket: state.basket.map(item => item.id === action.id
                    ? {
                      ...item,
                      quantity: item.quantity + 1,
                    }
                    : item
                  ),
                 
                };
              }
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
            case 'EMPTY_BASKET':
                return {
                  ...state,
                  basket: []
                }
            case "REMOVE_FROM_BASKET":
                const index = state.basket.findIndex(
                  (basketItem) => basketItem.id === action.id
                );
                let newBasket = [...state.basket];
              
                if (index >= 0) {
                  newBasket.splice(index, 1);
              
                } else {
                  console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!`
                  )
                }
              
                return {
                  ...state,
                  basket: newBasket
                }
        default:
            return state;
    }
};
export default reducer;