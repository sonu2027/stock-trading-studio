import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setScanner } from '../store/savedScannerSlice';
import { nanoid } from '@reduxjs/toolkit';
import { instruments } from '../utils/instrument.utils';
import { Instrument, ScannerStep } from '../types/strategy';
import { deleteScanner } from '../store/savedScannerSlice';

interface ScannerStepFormProps {
  saved: boolean;
  setSaved: (value: boolean) => void;
  setShowFilteredInstrument: (value: boolean) => void;
  setFilteredInstruments: (value: Instrument[]) => void;
  scannerData?: ScannerStep;
  setScannerId: (value: string) => void;
}

const ScannerStepForm: React.FC<ScannerStepFormProps> = ({
  saved,
  setSaved,
  setFilteredInstruments,
  setShowFilteredInstrument,
  scannerData,
  setScannerId,
}) => {
  const [exchange, setExchange] = useState('NSE');
  const [instrumentType, setInstrumentType] = useState('EQUITY');
  const [priceGrowth, setPriceGrowth] = useState(0);
  const [priceThreshold, setPriceThreshold] = useState(0);
  const [marketCapRank, setMarketCapRank] = useState(0);
  const [transactionValue, setTransactionValue] = useState(0);

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let id = '';
    if (scannerData?.id) {
      id = scannerData.id;
      setScannerId(id);
      dispatch(deleteScanner(id));
    } else {
      id = nanoid();
      setScannerId(id);
    }

    dispatch(
      setScanner({
        id,
        exchange,
        instrumentType,
        priceGrowth,
        priceThreshold,
        marketCapRank,
        transactionValue,
      })
    );

    setSaved(true);

    const tempFilteredInstruments: Instrument[] = instruments.filter(
      (e) =>
        e.exchange === exchange &&
        e.instrumentType === instrumentType &&
        e.price >= priceThreshold &&
        e.priceGrowth >= priceGrowth
    );

    setFilteredInstruments(tempFilteredInstruments);

    setTimeout(() => {
      setShowFilteredInstrument(true);
    }, 1200);
  };

  useEffect(() => {
    if (scannerData?.id) {
      setExchange(scannerData.exchange);
      setInstrumentType(scannerData.instrumentType);
      setPriceGrowth(scannerData.priceGrowth);
      setPriceThreshold(scannerData.priceThreshold);
      setMarketCapRank(scannerData.marketCapRank);
      setTransactionValue(scannerData.transactionValue);
    }
  }, []);

  const handleResetFilter = () => {
    setExchange('NSE')
    setInstrumentType('EQUITY')
    setPriceGrowth(0)
    setPriceThreshold(0)
    setMarketCapRank(0)
    setTransactionValue(0)
  }

  return (
    <div
      className={`max-w-lg mx-auto p-6 bg-white rounded-lg transition-all duration-300 ease-in-out ${!saved
        ? 'translate-x-0 opacity-100 max-h-[1000px] shadow-lg border border-gray-100'
        : '-translate-x-full opacity-0 h-0'
        }`}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Filter Instruments</h2>
        <button
          onClick={handleResetFilter}
          className="text-sm text-blue-600 hover:text-blue-800 hover:cursor-pointer"
        >
          Reset Filters
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider">
              Exchange
            </label>
            <div className="relative">
              <select
                value={exchange}
                onChange={(e) => setExchange(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border"
              >
                <option value="NSE">NSE</option>
                <option value="BSE">BSE</option>
                <option value="NYSE">NYSE</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider">
              Instrument Type
            </label>
            <div className="relative">
              <select
                value={instrumentType}
                onChange={(e) => setInstrumentType(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border"
              >
                <option value="EQUITY">EQUITY</option>
                <option value="BOND">BOND</option>
                <option value="ETFs">ETFs</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider">
              Min Price Growth (%)
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="number"
                value={priceGrowth}
                onChange={(e) => {
                  let trimmedValue = e.target.value.replace(/^0+/, '');
                  if (trimmedValue === '') trimmedValue = '0';
                  setPriceGrowth(Number(trimmedValue));
                  e.target.value = trimmedValue;
                }}
                className="block w-full pl-3 pr-12 py-2 text-base border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">%</span>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider">
              Min Price
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="number"
                value={priceThreshold}
                onChange={(e) => {
                  let trimmedValue = e.target.value.replace(/^0+/, '');
                  if (trimmedValue === '') trimmedValue = '0';
                  setPriceThreshold(Number(trimmedValue));
                  e.target.value = trimmedValue;
                }}
                className="block w-full pl-3 pr-12 py-2 text-base border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider">
              Market Cap Rank (%)
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="number"
                value={marketCapRank}
                onChange={(e) => {
                  let trimmedValue = e.target.value.replace(/^0+/, '');
                  if (trimmedValue === '') trimmedValue = '0';
                  setMarketCapRank(Number(trimmedValue));
                  e.target.value = trimmedValue;
                }}
                className="block w-full pl-3 pr-12 py-2 text-base border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">%</span>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider">
              Transaction Value
            </label>
            <div className="relative rounded-md shadow-sm">
              <input
                type="number"
                value={transactionValue}
                onChange={(e) => {
                  let trimmedValue = e.target.value.replace(/^0+/, '');
                  if (trimmedValue === '') trimmedValue = '0';
                  setTransactionValue(Number(trimmedValue));
                  e.target.value = trimmedValue;
                }}
                className="block w-full pl-3 pr-12 py-2 text-base border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Apply Filters
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScannerStepForm;