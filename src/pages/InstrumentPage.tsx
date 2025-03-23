import React from 'react';
import { instruments } from '../hooks/instrument.hooks';

const InstrumentPage: React.FC = () => {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                All Instruments
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {instruments.map((instrument) => (
                    <div
                        key={instrument.id}
                        className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
                    >
                        <div className="space-y-4">
                            <div className='flex justify-start items-center gap-x-1'>
                                <p className="text-sm text-gray-500">Exchange:</p>
                                <p className="text-lg font-semibold text-gray-800">{instrument.exchange}</p>
                            </div>

                            <div className='flex justify-start items-center gap-x-1'>
                                <p className="text-sm text-gray-500">Type:</p>
                                <p className="text-lg font-semibold text-gray-800">{instrument.instrumentType}</p>
                            </div>

                            <div className='flex justify-start items-center gap-x-1'>
                                <p className="text-sm text-gray-500">Price Growth:</p>
                                <p
                                    className={`text-lg font-semibold ${instrument.priceGrowth > 0 ? 'text-green-600' : 'text-red-600'
                                        }`}
                                >
                                    {instrument.priceGrowth}%
                                </p>
                            </div>

                            <div className='flex justify-start items-center gap-x-1'>
                                <p className="text-sm text-gray-500">Price:</p>
                                <p className="text-lg font-semibold text-gray-800">${instrument.price}</p>
                            </div>

                            <div className='flex justify-start items-center gap-x-1'>
                                <p className="text-sm text-gray-500">Market Cap Rank:</p>
                                <p className="text-lg font-semibold text-gray-800">{instrument.marketCapRank}%</p>
                            </div>

                            <div className='flex justify-start items-center gap-x-1'>
                                <p className="text-sm text-gray-500">Avg Daily Transaction:</p>
                                <p className="text-lg font-semibold text-gray-800">
                                    ${instrument.avgDailyTransactionValue.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default InstrumentPage;