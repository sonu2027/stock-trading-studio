import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface scanner {
  id:string,
  exchange: string;
  instrumentType: string;
  priceGrowth: number;
  priceThreshold: number;
  marketCapRank: number;
  transactionValue: number;
}

interface scannerTypes {
  data: scanner[];
}

const initialState: scannerTypes = {
  data: [],
};

const savedScannerSlice = createSlice({
  name: "savedScannerSlice",
  initialState,
  reducers: {
    setScanner: (state, action: PayloadAction<scanner>) => {
      state.data.push(action.payload);
    },
  },
});

export const { setScanner } = savedScannerSlice.actions;
export default savedScannerSlice.reducer; 