import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setScanner } from '../store/savedScannerSlice';
import { nanoid } from '@reduxjs/toolkit';
import { instruments } from '../hooks/instrument.hooks';
import { Instrument } from '../types/strategy';

interface ScannerStepFormProps {
  saved: boolean;
  setSaved: (value: boolean) => void;
  setShowFilteredInstrument: (value: boolean) => void;
  setFilteredInstruments: (value: Instrument[]) => void;
}

const ScannerStepForm: React.FC<ScannerStepFormProps> = ({ saved, setSaved, setFilteredInstruments, setShowFilteredInstrument }) => {

  const [exchange, setExchange] = useState('NSE');
  const [instrumentType, setInstrumentType] = useState('EQUITY');
  const [priceGrowth, setPriceGrowth] = useState(0);
  const [priceThreshold, setPriceThreshold] = useState(0);
  const [marketCapRank, setMarketCapRank] = useState(0);
  const [transactionValue, setTransactionValue] = useState(0);

  const dispatch = useDispatch()
  const id = nanoid()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setScanner({
      id,
      exchange,
      instrumentType,
      priceGrowth,
      priceThreshold,
      marketCapRank,
      transactionValue,
    }))

    setSaved(true)

    let tempFilteredInstruments: Instrument[] = instruments.filter((e) => (e.exchange === exchange && e.instrumentType === instrumentType && e.price >= priceThreshold && e.priceGrowth >= priceGrowth)
    )

    setFilteredInstruments(tempFilteredInstruments)

    setTimeout(()=>{
      setShowFilteredInstrument(true)
    }, 1200)

  };



  return (
    <div className={`max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-200 transition-all duration-1000 ease-in-out transform ${!saved ? 'translate-x-0 opacity-100 max-h-[1000px]' : '-translate-x-full opacity-0 h-0'}`}
    >
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
            onChange={(e) => {
              let trimmedValue = e.target.value.replace(/^0+/, '');
              if (trimmedValue === '') {
                trimmedValue = '0';
              }
              setPriceGrowth(Number(trimmedValue));
              e.target.value = trimmedValue;
            }}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Price Threshold</label>
          <input
            type="number"
            value={priceThreshold}
            onChange={(e) => {
              let trimmedValue = e.target.value.replace(/^0+/, '');
              if (trimmedValue === '') {
                trimmedValue = '0';
              }
              setPriceThreshold(Number(trimmedValue));
              e.target.value = trimmedValue;
            }}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Market Cap Rank (%)</label>
          <input
            type="number"
            value={marketCapRank}
            onChange={(e) => {
              let trimmedValue = e.target.value.replace(/^0+/, '');
              if (trimmedValue === '') {
                trimmedValue = '0';
              }
              setMarketCapRank(Number(trimmedValue));
              e.target.value = trimmedValue;
            }}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Transaction Value</label>
          <input
            type="number"
            value={transactionValue}
            onChange={(e) => {
              let trimmedValue = e.target.value.replace(/^0+/, '');
              if (trimmedValue === '') {
                trimmedValue = '0';
              }
              setTransactionValue(Number(trimmedValue));
              e.target.value = trimmedValue;
            }}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => setSaved(false)}
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