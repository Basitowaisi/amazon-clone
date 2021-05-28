import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id == action.payload.id
      )
      let newCart = [...state.items]
      if (index >= 0) {
        // remove that particular item from the cart
        newCart.splice(index, 1)
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id} as its not present in the cart)`
        )
      }
      state.items = newCart
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.cart.items
export const selectTotal = (state) =>
  state.cart.items.reduce((acc, item) => acc + item.price, 0)

export default cartSlice.reducer
