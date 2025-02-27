import { FiGift } from "react-icons/fi";

// Prop type definition - ensuring the component only accepts handleNext in function parameter
interface inputFormProps {
    handleNext: () => void;
}

const inputForm = ({ handleNext }: inputFormProps) => {
  return (
    <form className="mt-8">
        <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">Your Education 🎓</h1>
            <p className="text-gray-600 mt-2">Tell us about your academic background</p>
            <p className="text-sm text-blue-600 mt-2">800 WESPoints remaining to unlock ESA</p>
        </div>

        <div className="p-4 bg-blue-50 text-blue-700 rounded-lg shadow-md mb-8">
            <p className="flex gap-2 text-xl"><FiGift /> Your reward for this step is <strong>200 WESPoints</strong></p>
        </div>
        <div className="mb-4">
        <label htmlFor="institution" className="block text-gray-700 font-medium">
            Name of Institution <span className="text-red-600">*</span>
        </label>
        <input
            type="text"
            id="institution"
            className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
            placeholder="WESOnline"
        />
        </div>

        <div className="mb-4">
            <label htmlFor="journey" className="block text-gray-700 font-medium">
                Where are you on your journey? <span className="text-red-600">*</span>
            </label>
            <input
                type="text"
                id="journey"
                className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                placeholder="100"
            />
        </div>
        <div className="flex gap-6">
            <div className="mb-4">
                <label htmlFor="field" className="block text-gray-700 font-medium">
                    Field Of Study <span className="text-red-600">*</span>
                </label>
                <input
                    type="text"
                    id="field"
                    className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                    placeholder="E.g., Chemistry"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="gpa" className="block text-gray-700 font-medium">
                    GPA <span className="text-red-600">*</span>
                </label>
                <input
                    type="text"
                    id="gpa"
                    className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
                    placeholder="Your GPA"
                />
            </div>
        </div>
        <div className="mb-6">
        <label htmlFor="interest" className="block text-gray-700 font-medium">
            What areas interest you most? <span className="text-red-600">*</span>
        </label>
        <input
            type="text"
            id="interest"
            className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
            placeholder="Business & Management"
        />
        </div>

        <div className="flex justify-between items-center mt-12">
                <button className="text-gray-500 hover:text-gray-700 transition cursor-pointer">
                    Skip For Now
                </button>

                <button
                    className="bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition cursor-pointer"
                    onClick={handleNext}
                    type="button"
                >
                    Continue
                </button>
            </div>
    </form>
  )
}

export default inputForm;