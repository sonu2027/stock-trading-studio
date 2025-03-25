import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InstrumentState {
  data: string[];
}

const initialState: InstrumentState = {
  data: [],
};

const purchaseInstrumentSlice = createSlice({
  name: "instrumentSlice",
  initialState,
  reducers: {
    setInstrument: (state, action: PayloadAction<string>) => {
      state.data.push(action.payload);
    },
    deleteInstrument: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((e) => e != action.payload)
    }
  },
});

export const { setInstrument, deleteInstrument } = purchaseInstrumentSlice.actions;
export default purchaseInstrumentSlice.reducer;
