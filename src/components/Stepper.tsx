const Stepper = ({ steps, currentStep }: { steps: number; currentStep: number }) => {
  // Array(steps) → Creates an empty array with steps number of spaces.
  // .keys() → Fills those spaces with index numbers (0, 1, 2, ...) converting it to an actual array of numbers
  const stepArray = [...Array(steps).keys()];

  // Rendering the UI
  return (
    <div className="flex space-x-2">
      {stepArray.map((index) => (
        // Render each step as a div
        // Index represents the current step position in the array 0 - 3
        <div
          key={index}
          className={`text-4xl font-bold rounded-xs ${
            currentStep > index ? 'text-blue-500' : 'text-gray-300'
          }`}
        >
          {currentStep > index ? '_____' : '_____'}
        </div>
      ))}
    </div>
  );
};
export default Stepper