import { useState } from "react";
import { ScannerStep as scannerStepType } from "../types/strategy"
import { useDispatch } from "react-redux";
import { setScanner, deleteScanner } from "../store/savedScannerSlice";
import { nanoid } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

interface ScannerStepProps {
    savedScannerSteps: scannerStepType[];
    setShowScannerStep: (value: boolean) => void
    setScannerData: (value: scannerStepType) => void
}

const ScannerStep: React.FC<ScannerStepProps> = ({ savedScannerSteps, setShowScannerStep, setScannerData }) => {

    const dispatch = useDispatch()
    const id = nanoid()

    const [copy, setCopy] = useState<string>("Copy")

    const handleCopy = (step: scannerStepType) => {
        setCopy("Copied")
        dispatch(setScanner({ id, exchange: step.exchange, instrumentType: step.instrumentType, priceGrowth: step.priceGrowth, priceThreshold: step.priceThreshold, marketCapRank: step.marketCapRank, transactionValue: step.transactionValue }))
        setTimeout(() => {
            setCopy("Copy")
        }, 1500)
    }

    const handleDelete = (id: string) => {
        dispatch(deleteScanner(id))
        toast.success("Scanner step deleted Successfully")
    }

    const handleEdit = (step: scannerStepType) => {
        setShowScannerStep(false)
        setScannerData(step)
    }

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Saved Scanner Steps</h1>

            {savedScannerSteps.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No scanner steps saved yet</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {savedScannerSteps.map((step) => (
                        <div
                            key={step.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h2 className="text-lg font-semibold text-gray-800">
                                        {step.exchange} - {step.instrumentType}
                                    </h2>
                                    <span className="bg-blue-100 text-blue-800 text-[11px] font-medium px-2.5 py-0.5 rounded-full">
                                        ID: {step.id}
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Price Growth:</span>
                                        <span className={`font-medium ${step.priceGrowth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                            {step.priceGrowth}%
                                        </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Price Threshold:</span>
                                        <span className="font-medium">${step.priceThreshold}</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Market Cap Rank:</span>
                                        <span className="font-medium">{step.marketCapRank}%</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Transaction Value:</span>
                                        <span className="font-medium">${step.transactionValue.toLocaleString()}</span>
                                    </div>
                                </div>

                                <div className="mt-6 flex justify-end space-x-2">
                                    <button onClick={() => handleCopy(step)} className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors flex items-center gap-1">{copy}</button>
                                    <button onClick={() => handleEdit(step)} className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                                        Edit
                                    </button>
                                    <button onClick={() => handleDelete(step.id)} className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition-colors">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ScannerStep