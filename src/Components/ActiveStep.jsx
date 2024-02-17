import React from 'react';

const ActiveStep = ({ currentStep }) => {
    console.log('Current step:', currentStep);
  return (
    <div className='d-flex justify-content-between'>
      <span className={currentStep === 1 ? 'active-step' : 'inactive-step'}>1</span>
      <span className={currentStep === 2 ? 'active-step' : 'inactive-step'}>2</span>
      <span className={currentStep === 3 ? 'active-step' : 'inactive-step'}>3</span>
    </div>
  );
};

export default ActiveStep;
