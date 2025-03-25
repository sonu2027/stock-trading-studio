import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { instruments } from "../utils/instrument.utils"
import { useEffect, useState } from "react";
import { Instrument as instrumentType } from "../types/strategy";
import InstrumentComponent from "./InstrumentComponent";
import { useDispatch } from "react-redux";
import { deleteInstrument } from "../store/purchaseInstrumentSlice";

function PurchasedInstrument() {

  const dispatch = useDispatch()

  const [savedInstrumentsData, setSavedInstrumentsData] = useState<instrumentType[]>([]);
  const savedInstruments = useSelector((state: RootState) => state.purchasedInstrument.data);

  useEffect(() => {
    const tempArray = instruments.filter(e => savedInstruments.includes(e.id));
    setSavedInstrumentsData(tempArray);
  }, [savedInstruments]);

  const handleDeleteInstrument = (instrumentId: string) => {
    dispatch(deleteInstrument(instrumentId))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 mb-2">
            Your Investment Portfolio
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Manage your purchased instruments and track their performance
          </p>
        </header>

        {savedInstrumentsData.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">
              No instruments purchased yet
            </h3>
            <p className="text-gray-500">
              Start building your portfolio by purchasing instruments from the marketplace
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {savedInstrumentsData.map((instrument) => (
              <div
                key={instrument.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <InstrumentComponent instrument={instrument} />
                <div className="p-4 border-t border-gray-100">
                  <button onClick={() => handleDeleteInstrument(instrument.id)} className="w-full py-2 px-4 bg-red-50 hover:bg-red-100 text-red-600 font-medium rounded-lg transition-colors duration-200 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Sell Instrument
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PurchasedInstrument;