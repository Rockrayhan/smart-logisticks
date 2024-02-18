import React from "react";

import StepWizard from "react-step-wizard";
import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import ActiveStep from "./ActiveStep";

const Home = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };
  return (
<div className="flex justify-between my-5 mx-10">

<div className="w-1/2">
  <div className="my-5">
    <ActiveStep currentStep={currentStep}/>
  </div>

  <StepWizard onStepChange={handleStepChange}>
    <Step1/>
    <Step2/>
    <Step3/>
  </StepWizard>
</div>

<div className="w-1/2">
  <img className="w-full rounded-md" src="https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg" alt="" />
</div>

</div>

  );
};

export default Home;
