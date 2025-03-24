import React, { useState } from 'react';
import ScannerStepForm from '../components/ScannerStepForm';
import BuyStep from '../components/BuyStep';
import Navbar from '../components/Navbar';
import { Instrument } from '../types/strategy';

const CreateStrategy: React.FC = () => {
  const [saved, setSaved] = useState<boolean>(false);
  const [filteredInstruments, setFilteredInstruments] = useState<Instrument[]>([]);
  const [showFilteredInstrument, setShowFilteredInstrument] = useState<boolean>(false)

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl mt-2 font-bold text-center text-gray-800 mb-8">
        Create Strategy
      </h1>
      <ScannerStepForm saved={saved} setSaved={setSaved} setFilteredInstruments={setFilteredInstruments} setShowFilteredInstrument={setShowFilteredInstrument}/>
      {
        (saved && showFilteredInstrument) &&
        <div className='flex justify-center items-center'>
          <BuyStep filteredInstruments={filteredInstruments} setFilteredInstruments={setFilteredInstruments} saved={saved} setSaved={setSaved}/>
        </div>
      }
    </div>
  );
};

export default CreateStrategy;
