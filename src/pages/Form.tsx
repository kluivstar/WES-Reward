import { useState } from "react";
import Stepper from "../components/Stepper";
import InputForm from "../components/inputForm";
import Congratulations from "../components/Congratulations";

const Form: React.FC = () => {
  // Used to track current step-progress
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  // Increase current step
  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 space-y-6 w-4xl">
        <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">

        {/* Stepper Progress Bar */}
        <Stepper steps={totalSteps} currentStep={currentStep} />

        {/* Conditionally render InputForm for steps 1 -3 or render Congratulations from step 4*/}
        {currentStep === 4 ? <Congratulations setCurrentStep={setCurrentStep} /> : <InputForm handleNext={handleNext}  />}
        </div>
    </div>
  );
};

export default Form;
