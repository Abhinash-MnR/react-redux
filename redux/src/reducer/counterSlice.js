// import { createSlice } from "@reduxjs/toolkit"; //next js redux toolkit
// export const counterSlice = createSlice({
//   name: "counter",
//   initialState: {
//     value: 0,
//   },
//   reducers: {
//     increase: (state) => {
//       state.value= state.value+1;
//     },
//     decrease: (state) => {
//       state.value =state.value-1;
//     },
//   },
// });
// // case under reducers becomes an action
// export const { increase, decrease } = counterSlice.actions;

// export default counterSlice.reducer




import { createSlice } from "@reduxjs/toolkit";

 const counterSlice = createSlice({
  name:"counter",
  initialState:{
    value:0
  },
  reducers:{
    increase:(state)=>{
      state.value = state.value+1;
    },
    decrease:(state)=>{
      state.value = state.value-1;
    }

  }
})
export const {increase,decrease} = counterSlice.actions;
export default counterSlice.reducer
