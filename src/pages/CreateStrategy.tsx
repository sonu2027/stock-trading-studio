import React, { useState } from 'react';
import ScannerStepForm from '../components/ScannerStepForm';
import BuyStep from '../components/BuyStep';
import Navbar from '../components/Navbar';
import { Instrument } from '../types/strategy';
import { IoIosArrowRoundBack } from "react-icons/io";

const CreateStrategy: React.FC = () => {
  const [saved, setSaved] = useState<boolean>(false);
  const [filteredInstruments, setFilteredInstruments] = useState<Instrument[]>([]);
  const [showFilteredInstrument, setShowFilteredInstrument] = useState<boolean>(false)
  const [scannerId, setScannerId] = useState<string>('')

  const gotoBack = () => {
    setSaved(false)
    setShowFilteredInstrument(false)
}

  return (
    <div className='mb-6'>
      <Navbar />
      <h1 className="text-3xl mt-2 font-bold text-center text-gray-800 mb-8">
        Create Strategy
      </h1>
      <ScannerStepForm saved={saved} setSaved={setSaved} setFilteredInstruments={setFilteredInstruments} setShowFilteredInstrument={setShowFilteredInstrument} setScannerId={setScannerId} />
      {
        (saved && showFilteredInstrument) &&
        <div>
          <IoIosArrowRoundBack onClick={() => gotoBack()} className="relative z-10 text-4xl ml-10 mb-4 hover:cursor-pointer hover:animate-ping" />
          <div className='flex justify-center items-center'>
            <BuyStep filteredInstruments={filteredInstruments} setFilteredInstruments={setFilteredInstruments} saved={saved} setSaved={setSaved} scannerId={scannerId} />
          </div>
        </div>
      }
    </div>
  );
};

export default CreateStrategy;
