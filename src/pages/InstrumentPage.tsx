import React from 'react';
import { instruments } from '../hooks/instrument.hooks';
import Navbar from '../components/Navbar';
import InstrumentComponent from '../components/InstrumentComponent';

const InstrumentPage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="p-6 bg-gray-50 min-h-screen">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    All Instruments
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {instruments.map((instrument) => (
                        <InstrumentComponent key={instrument.id} instrument={instrument} />
                    ))}
                </div>
            </div >
        </div>
    );
};

export default InstrumentPage;