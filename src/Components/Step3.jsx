import React from 'react';
// import ActiveStep from './ActiveStep';

const Step3 = (props) => {
    const {currentStep, previousStep } = props;

    return (
        <div>
           {/* <h1 className={currentStep === 3 ? 'step active' : 'step'}> Step  3  </h1>  */}
           <h1> Step 3 </h1>
           {/* <ActiveStep currentStep={currentStep}/>  */}
           <button onClick={previousStep}>Previous</button>
        </div>
    );
};

export default Step3;