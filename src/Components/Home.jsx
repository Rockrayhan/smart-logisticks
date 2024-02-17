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
    <div className="d-flex justify-content-between my-5 container">

      <div>
    <div className="my-5" >
        <ActiveStep currentStep={currentStep}/>
    </div>

        <StepWizard onStepChange={handleStepChange}>
          <Step1/>
          <Step2/>
          <Step3/>
        </StepWizard>

      </div>
      <div>
        <img className="w-75 rounded rounded-5" src="https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg" alt="" />
      </div>
    </div>
  );
};

export default Home;
