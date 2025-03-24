// src/types/strategy.ts
export interface ScannerStep {
  id:string,
  exchange: string;
  instrumentType: string;
  priceGrowth: number;
  priceThreshold: number;
  marketCapRank: number;
  transactionValue: number;
}

export interface BuyStep {
  lastPriceVsClose: boolean;
  lastPriceVsMovingAverage: boolean;
}

export interface SellStep {
  trailingStoploss: number;
  holdDuration: number;
}

export interface SimulationStep {
  startMargin: number;
  startDate: string;
  endDate: string;
  maxPositions: number;
  maxPositionsPerInstrument: number;
  orderSortingType: string;
}

export interface Strategy {
  id: string;
  name: string;
  scannerStep: ScannerStep;
  buyStep: BuyStep;
  sellStep: SellStep;
  simulationStep: SimulationStep;
  status?: 'draft' | 'submitted' | 'completed';
}

export interface Instrument {
  id: string;
  exchange: string;
  instrumentType: string;
  priceGrowth: number; // Price growth over the last 300 days (%)
  price: number; // Current price
  marketCapRank: number; // Rank by market cap (e.g., top 10% = 10)
  avgDailyTransactionValue: number; // Average daily transaction value over 90 days
}