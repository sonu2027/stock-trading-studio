import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { useState } from "react";
import ScannerStepForm from "../components/ScannerStepForm";
import { Instrument, ScannerStep as ScannerStepType } from "../types/strategy";
import ScannerStep from "../components/ScannerStep";
import BuyStep from "../components/BuyStep";
import { IoIosArrowRoundBack } from "react-icons/io";

function SavedScannerComponent() {
    const savedScannerSteps = useSelector((state: RootState) => state.savedScanner.data);
    const [showScannerStep, setShowScannerStep] = useState<boolean>(true)
    const [scannerData, setScannerData] = useState<ScannerStepType>({
        id: "",
        exchange: "",
        instrumentType: "",
        priceGrowth: 0,
        priceThreshold: 0,
        marketCapRank: 0,
        transactionValue: 0
    })

    const [saved, setSaved] = useState<boolean>(false);
    const [filteredInstruments, setFilteredInstruments] = useState<Instrument[]>([]);
    const [showFilteredInstrument, setShowFilteredInstrument] = useState<boolean>(false)

    const gotoBack = () => {
        setSaved(false)
        setShowFilteredInstrument(false)
        console.log("clicked");
    }

    return (
        <div>
            <Navbar />
            {
                showScannerStep ?
                    <ScannerStep setShowScannerStep={setShowScannerStep} savedScannerSteps={savedScannerSteps} setScannerData={setScannerData} />
                    :
                    <div className="my-8">
                        <ScannerStepForm scannerData={scannerData} saved={saved} setSaved={setSaved} setFilteredInstruments={setFilteredInstruments} setShowFilteredInstrument={setShowFilteredInstrument} />
                    </div>
            }
            {
                (saved && showFilteredInstrument) &&
                <div>
                    <IoIosArrowRoundBack onClick={() => gotoBack()} className="relative z-10 text-4xl ml-10 mb-4 hover:cursor-pointer hover:animate-ping" />
                    <div className='flex justify-center items-center'>
                        <BuyStep filteredInstruments={filteredInstruments} setFilteredInstruments={setFilteredInstruments} saved={saved} setSaved={setSaved} />
                    </div>
                </div>
            }
        </div>
    );
}

export default SavedScannerComponent;