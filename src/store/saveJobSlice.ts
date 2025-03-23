// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface Job {
//   exchange: string;
//   instrumentType: string;
//   priceGrowth: number;
//   priceThreshold: number;
//   marketCapRank: number;
//   transactionValue: number;
// }

// interface SaveJobState {
//   data: Job[];
// }

// const initialState: SaveJobState = {
//   data: [],
// };

// const saveJobSlice = createSlice({
//   name: "saveJobSlice",
//   initialState,
//   reducers: {
//     setJob: (state, action: PayloadAction<Job>) => {
//       console.log("action: ", action);
//       state.data.push(action.payload);
//     },
//   },
// });

// export const { setJob } = saveJobSlice.actions;
// export default saveJobSlice.reducer;


import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of a job
interface Job {
  exchange: string;
  instrumentType: string;
  priceGrowth: number;
  priceThreshold: number;
  marketCapRank: number;
  transactionValue: number;
}

// Define the structure of the state
interface SaveJobState {
  data: Job[];
}

// Initial state
const initialState: SaveJobState = {
  data: [],
};

// Create the slice
const saveJobSlice = createSlice({
  name: "saveJob",
  initialState,
  reducers: {
    setJob: (state, action: PayloadAction<Job>) => {
      state.data.push(action.payload);
    },
  },
});

// Export actions and reducer
export const { setJob } = saveJobSlice.actions;
export default saveJobSlice.reducer; // Export the reducer directly