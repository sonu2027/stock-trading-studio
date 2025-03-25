export interface ScannerStep {
  id: string,
  exchange: string;
  instrumentType: string;
  priceGrowth: number;
  priceThreshold: number;
  marketCapRank: number;
  transactionValue: number;
}

export interface Instrument {
  id: string;
  exchange: string;
  instrumentType: string;
  priceGrowth: number;
  price: number;
  marketCapRank: number;
  avgDailyTransactionValue: number;
}

// These are the types which created I need to add more feature

// export interface BuyStep {
//   lastPriceVsClose: boolean;
//   lastPriceVsMovingAverage: boolean;
// }

// export interface SellStep {
//   trailingStoploss: number;
//   holdDuration: number;
// }

// export interface SimulationStep {
//   startMargin: number;
//   startDate: string;
//   endDate: string;
//   maxPositions: number;
//   maxPositionsPerInstrument: number;
//   orderSortingType: string;
// }

// export interface Strategy {
//   id: string;
//   name: string;
//   scannerStep: ScannerStep;
//   buyStep: BuyStep;
//   sellStep: SellStep;
//   simulationStep: SimulationStep;
//   status?: 'draft' | 'submitted' | 'completed';
// }