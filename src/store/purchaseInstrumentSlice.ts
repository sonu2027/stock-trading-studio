import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state type
interface InstrumentState {
  data: string[]; // Ensuring `data` only holds strings
}

// Initial state
const initialState: InstrumentState = {
  data: [],
};

// Create the slice
const purchaseInstrumentSlice = createSlice({
  name: "instrumentSlice",
  initialState,
  reducers: {
    setInstrument: (state, action: PayloadAction<string>) => {
      state.data.push(action.payload); // Ensures only strings are added
    },
  },
});

// Export actions and reducer
export const { setInstrument } = purchaseInstrumentSlice.actions;
export default purchaseInstrumentSlice.reducer;
