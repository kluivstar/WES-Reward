import frame from '../assets/Frame.png';
import { FiGift } from "react-icons/fi";

interface CongratulationsProps {
    setCurrentStep: (value: number) => void;
}

function Congratulations({ setCurrentStep }: CongratulationsProps) {
  return (
    <div className="flex flex-col items-center">
      <img src={frame} alt="WOW!" className="mb-4" />
      
      <h1 className="text-green-600 font-bold text-lg">Congratulations</h1>
      <p className="text-gray-700 mb-4">You've earned 1000 WESPoints</p>
      
      <div className="p-4 bg-blue-50 text-blue-700 rounded-lg shadow-md w-full text-center">
        <p className="flex items-center justify-center gap-2 text-xl font-semibold">
          <FiGift /> Your Rewards
        </p>
        <p className="text-lg font-semibold mt-4">2000 WESPoint Unlocked</p>
        <p className="text-sm text-blue-700 mt-4">
          Want to know your employability status? Take the ESA with your 2000 WESPoints to get started!
        </p>
        <button onClick={() => setCurrentStep(1)} className="mt-4 w-96 cursor-pointer px-6 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition">
          Take ESA
        </button>
      </div>
    </div>
  );
}

export default Congratulations;
