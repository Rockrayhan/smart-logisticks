import React from 'react';
// import ActiveStep from './ActiveStep';

const Step3 = (props) => {
    const {currentStep, previousStep } = props;

    return (
        <div>
           {/* <h1 className={currentStep === 3 ? 'step active' : 'step'}> Step  3  </h1>  */}
           <h1> Step 3 </h1>
           {/* <ActiveStep currentStep={currentStep}/>  */}
           <button type="button" onClick={previousStep} class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Previous</button>
        </div>
    );
};

export default Step3;