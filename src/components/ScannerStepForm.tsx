import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setJob } from '../store/saveJobSlice';

interface ScannerStepFormProps {
  onSubmit: (data: {
    exchange: string;
    instrumentType: string;
    priceGrowth: number;
    priceThreshold: number;
    marketCapRank: number;
    transactionValue: number;
  }) => void;
}

const ScannerStepForm: React.FC<ScannerStepFormProps> = ({ onSubmit }) => {

  const [exchange, setExchange] = useState('');
  const [instrumentType, setInstrumentType] = useState('');
  const [priceGrowth, setPriceGrowth] = useState(0);
  const [priceThreshold, setPriceThreshold] = useState(0);
  const [marketCapRank, setMarketCapRank] = useState(0);
  const [transactionValue, setTransactionValue] = useState(0);

  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      exchange,
      instrumentType,
      priceGrowth,
      priceThreshold,
      marketCapRank,
      transactionValue,
    });

    dispatch(setJob({
      exchange,
      instrumentType,
      priceGrowth,
      priceThreshold,
      marketCapRank,
      transactionValue,
    }))

  };



  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Scanner Step Configuration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Exchange</label>
          <select value={exchange}
            onChange={(e) => setExchange(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required name="" id="">
            <option value="NSE">NSE</option>
            <option value="BSE">BSE</option>
            <option value="NYSE">NYSE</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Instrument Type</label>
          <select value={instrumentType}
            onChange={(e) => setInstrumentType(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required name="" id="">
            <option value="EQUITY">EQUITY</option>
            <option value="BOND">BOND</option>
            <option value="ETFs">ETFs</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Price Growth (%)</label>
          <input
            type="number"
            value={priceGrowth}
            onChange={(e) => setPriceGrowth(Number(e.target.value))}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Price Threshold</label>
          <input
            type="number"
            value={priceThreshold}
            onChange={(e) => setPriceThreshold(Number(e.target.value))}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Market Cap Rank (%)</label>
          <input
            type="number"
            value={marketCapRank}
            onChange={(e) => setMarketCapRank(Number(e.target.value))}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Transaction Value</label>
          <input
            type="number"
            value={transactionValue}
            onChange={(e) => setTransactionValue(Number(e.target.value))}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save Scanner Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScannerStepForm;