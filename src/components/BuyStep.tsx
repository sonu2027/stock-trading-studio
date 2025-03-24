import { Instrument } from "../types/strategy";
import InstrumentComponent from "./InstrumentComponent";
import { useDispatch, useSelector } from "react-redux";
import { setInstrument } from "../store/purchaseInstrumentSlice";
import { useEffect } from "react";
import { RootState } from "../store/store";
import toast from "react-hot-toast";

interface BuyStepProps {
  filteredInstruments: Instrument[];
  saved: boolean;
  setSaved: (value: boolean) => void
  setFilteredInstruments: (value: Instrument[]) => void;
}

const BuyStep: React.FC<BuyStepProps> = ({ filteredInstruments, setFilteredInstruments, setSaved, saved }) => {

  const purchasedInstruments = useSelector((state: RootState) => state.purchasedInstrument.data);
  const dispatch = useDispatch()

  const handlePurchase = (instrumentId: string) => {
    dispatch(setInstrument(instrumentId))
    setFilteredInstruments([...filteredInstruments.filter((e) => e.id != instrumentId)])
    toast.success("Purchased Successfully")
  }

  useEffect(() => {
    if (filteredInstruments.length == 0) {
      setSaved(!saved)
    }
  }, [filteredInstruments])

  return (
    <div className={`flex flex-wrap w-11/12 justify-center items-center gap-x-4 transition-all ease-in-out duration-2000 transform ${saved ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
      {filteredInstruments.map((instrument) => (
        <div key={instrument.id}>
          <InstrumentComponent instrument={instrument} />
          {
            purchasedInstruments.includes(instrument.id) ?
              <button onClick={() => toast.error("Already Purchased")} className="border-[1px] border-solid bg-gray-200 border-blue-600 w-full rounded-md mb-8">Purchased</button>
              :
              <button onClick={() => handlePurchase(instrument.id)} className="border-[1px] border-solid border-blue-600 w-full rounded-md mb-8">Buy</button>
          }
        </div>
      ))}
    </div>
  );
};

export default BuyStep;
