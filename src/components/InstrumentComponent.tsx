import React from 'react';
import { Instrument } from '../types/strategy';

interface InstrumentComponentProps {
  instrument: Instrument;
}

const InstrumentComponent: React.FC<InstrumentComponentProps> = ({ instrument }) => {
  return (
    <div
      key={instrument.id}
      className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
    >
      <div className="space-y-4">
        <div className="flex justify-start items-center gap-x-1">
          <p className="text-sm text-gray-500">Exchange:</p>
          <p className="text-lg font-semibold text-gray-800">{instrument.exchange}</p>
        </div>

        <div className="flex justify-start items-center gap-x-1">
          <p className="text-sm text-gray-500">Type:</p>
          <p className="text-lg font-semibold text-gray-800">{instrument.instrumentType}</p>
        </div>

        <div className="flex justify-start items-center gap-x-1">
          <p className="text-sm text-gray-500">Price Growth:</p>
          <p
            className={`text-lg font-semibold ${instrument.priceGrowth > 0 ? 'text-green-600' : 'text-red-600'
              }`}
          >
            {instrument.priceGrowth}%
          </p>
        </div>

        <div className="flex justify-start items-center gap-x-1">
          <p className="text-sm text-gray-500">Price:</p>
          <p className="text-lg font-semibold text-gray-800">${instrument.price}</p>
        </div>

        <div className="flex justify-start items-center gap-x-1">
          <p className="text-sm text-gray-500">Market Cap Rank:</p>
          <p className="text-lg font-semibold text-gray-800">{instrument.marketCapRank}%</p>
        </div>

        <div className="flex justify-start items-center gap-x-1">
          <p className="text-sm text-gray-500">Avg Daily Transaction:</p>
          <p className="text-lg font-semibold text-gray-800">
            ${instrument.avgDailyTransactionValue.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstrumentComponent;