import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [
  { id: 1, name: "Ali Khan", email: "ali.khan@example.com", age: 25 },
  { id: 2, name: "Sara Ahmed", email: "sara.ahmed@example.com", age: 22 },
  { id: 3, name: "Bilal Hussain", email: "bilal.hussain@example.com", age: 30 },
  { id: 4, name: "Ayesha Noor", email: "ayesha.noor@example.com", age: 27 },
  { id: 5, name: "Hamza Sheikh", email: "hamza.sheikh@example.com", age: 28 },
  { id: 6, name: "Fatima Iqbal", email: "fatima.iqbal@example.com", age: 24 },
  { id: 7, name: "Usman Raza", email: "usman.raza@example.com", age: 32 },
  { id: 8, name: "Zain Ali", email: "zain.ali@example.com", age: 26 },
  { id: 9, name: "Hira Shah", email: "hira.shah@example.com", age: 29 },
  { id: 10, name: "Imran Khan", email: "imran.khan@example.com", age: 35 }
]

}

export const counterSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userDelete: (state, action) => {
      state.users.splice(action.payload, 1);
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { userDelete } = counterSlice.actions

export default counterSlice.reducer