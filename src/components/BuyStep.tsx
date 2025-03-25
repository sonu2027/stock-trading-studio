import { Instrument } from "../types/strategy";
import InstrumentComponent from "./InstrumentComponent";
import { useDispatch, useSelector } from "react-redux";
import { setInstrument } from "../store/purchaseInstrumentSlice";
import { useEffect } from "react";
import { RootState } from "../store/store";
import toast from "react-hot-toast";
import { deleteScanner } from "../store/savedScannerSlice";
import { FaCartShopping } from "react-icons/fa6";

interface BuyStepProps {
  filteredInstruments: Instrument[];
  saved: boolean;
  setSaved: (value: boolean) => void
  setFilteredInstruments: (value: Instrument[]) => void;
  scannerId: string;
}

const BuyStep: React.FC<BuyStepProps> = ({ filteredInstruments, setFilteredInstruments, setSaved, saved, scannerId }) => {

  const purchasedInstruments = useSelector((state: RootState) => state.purchasedInstrument.data);
  const dispatch = useDispatch()

  const handlePurchase = (instrumentId: string) => {
    dispatch(setInstrument(instrumentId))
    setFilteredInstruments([...filteredInstruments.filter((e) => e.id != instrumentId)])
    dispatch(deleteScanner(scannerId))
    toast.success("Purchased Successfully")
  }

  useEffect(() => {
    if (filteredInstruments.length == 0) {
      toast.error("No instrument found for this filter!")
      setSaved(!saved)
    }
  }, [filteredInstruments])

  return (
    <div className={`flex flex-wrap justify-center items-stretch gap-6 p-4 transition-all duration-500 ease-in-out ${saved ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
      {filteredInstruments.map((instrument) => (
        <div
          key={instrument.id}
          className="w-full sm:w-[35rem] md:w-[22rem] lg:w-[28rem] xl:w-[32rem] transition-transform duration-300 hover:scale-[1.02]"
        >
          <div className="h-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <InstrumentComponent instrument={instrument} />

            <div className="p-4 mt-auto">
              {purchasedInstruments.includes(instrument.id) ? (
                <button
                  onClick={() => toast.error("Already Purchased")}
                  className="w-full py-3 px-4 bg-emerald-50 text-emerald-700 font-medium rounded-lg flex items-center justify-center gap-2 cursor-not-allowed"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Purchased
                </button>
              ) : (
                <button
                  onClick={() => handlePurchase(instrument.id)}
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
                >
                  <FaCartShopping className="h-5 w-5"/>
                  Buy Now
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BuyStep;
