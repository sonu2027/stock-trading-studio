import React, { useState } from 'react';
import ScannerStepForm from '../components/ScannerStepForm';
import { Strategy } from '../types/strategy';

const CreateStrategy: React.FC = () => {
  const [strategy, setStrategy] = useState<Strategy>({
    id: '',
    name: '',
    scannerStep: {
      exchange: '',
      instrumentType: '',
      priceGrowth: 0,
      priceThreshold: 0,
      marketCapRank: 0,
      transactionValue: 0,
    },
    buyStep: {
      lastPriceVsClose: false,
      lastPriceVsMovingAverage: false,
    },
    sellStep: {
      trailingStoploss: 0,
      holdDuration: 0,
    },
    simulationStep: {
      startMargin: 0,
      startDate: '',
      endDate: '',
      maxPositions: 0,
      maxPositionsPerInstrument: 0,
      orderSortingType: '',
    },
  });

  const handleScannerStepSubmit = (data: {
    exchange: string;
    instrumentType: string;
    priceGrowth: number;
    priceThreshold: number;
    marketCapRank: number;
    transactionValue: number;
  }) => {
    setStrategy((prev) => ({
      ...prev,
      scannerStep: data,
    }));
    localStorage.setItem('data', JSON.stringify(data));
  };

  const handleSaveStrategy = () => {
    console.log('Strategy saved:', strategy);
    // Save the strategy to localStorage or state management
  };

  return (
    <div>
      <h1 className="text-3xl mt-2 font-bold text-center text-gray-800 mb-8">
        Create Strategy
      </h1>
      <ScannerStepForm onSubmit={handleScannerStepSubmit} />
      <button onClick={handleSaveStrategy}>Save Strategy</button>
    </div>
  );
};

export default CreateStrategy;