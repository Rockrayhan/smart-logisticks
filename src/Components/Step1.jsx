import React from 'react';
// import ActiveStep from './ActiveStep';

const Step1 = (props) => {
    const {currentStep, nextStep } = props;

    return (
        <div>
            {/* <ActiveStep currentStep={currentStep}/> */}
            {/* <h1 className={currentStep === 1 ? 'step active' : 'step'}> Step 1 </h1> */}
            <h1> Step 1 </h1>
            <button onClick={  nextStep}>Next</button>
        </div>
    );
};

export default Step1;