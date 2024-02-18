import React from "react";
// import ActiveStep from './ActiveStep';

const Step1 = (props) => {
  const { currentStep, nextStep } = props;

  return (
    <div>
      {/* <ActiveStep currentStep={currentStep}/> */}
      {/* <h1 className={currentStep === 1 ? 'step active' : 'step'}> Step 1 </h1> */}
      <h1> Step 1 </h1>

      <div className="flex gap-6 my-6">
        <div className="h-20 w-20  bg-orange-300">Home Removals</div>

        <div className="h-20 w-20  bg-orange-600">Funriture and others</div>
      </div>

      <button
        type="button"
        onClick={nextStep}
        class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
      >
        Next
      </button>
    </div>
  );
};

export default Step1;
