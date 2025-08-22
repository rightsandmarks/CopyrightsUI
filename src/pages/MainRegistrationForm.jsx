import React, { useState } from "react";
import Step1UserDetails from "../components/Step1UserDetails";
import Step2WorkDetails from "../components/Step2WorkDetails";
import Step3CopyrightDetails from "../components/Step3CopyrightDetails";
import Step4OwnershipDetails from "../components/Step4OwnershipDetails";
import Step5CertificationDetails from "../components/Step5CertificationDetails";

const MainRegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    user: {},
    work: {},
    CopyrightApplication: {},
    Ownership: {},
    Certification: {},
  });

  const handleNext = (newData, stepName) => {
    handleFormDataChange(newData, stepName);
    console.log("Next ",step + 1," Form Data: ", formData);
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleFormDataChange = (newData, stepName) => {
    setFormData((prevData) => ({
      ...prevData,
      [stepName]: newData,
    }));
  };

  const handleSubmit = (newData, stepName) => {
    handleFormDataChange(newData, stepName);
    console.log("Final Form Data: ", formData);
    alert("Form submitted successfully!");
  };

  return (

    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Progress Bar */}
        <div className="flex justify-between items-center bg-indigo-600 text-white p-4">
          <h1 className="text-lg font-bold">
            {step === 1 && "User Details"}
            {step === 2 && "Work Details"}
            {step === 3 && "Copyright Application"}
            {step === 4 && "Ownership / Rights Holder"}
            {step === 5 && "Certification / License"}
          </h1>
          <span>
            Step {step} of 5
          </span>
        </div>
        {/* Render the current step based on `step` state */}
        {step === 1 && (
          <Step1UserDetails
            formData={formData.user}
            onChange={(data) => handleFormDataChange(data, "user")}
            onNext={(data) => handleNext(data, 'user')}
          />
        )}
        {step === 2 && (
          <Step2WorkDetails
            formData={formData.work}
            onChange={(data) => handleFormDataChange(data, "work")}
            onPrev={handlePrev}
            onNext={(data) => handleNext(data, 'work')}
          />
        )}
        {step === 3 && (
          <Step3CopyrightDetails
            formData={formData.CopyrightApplication}
            onChange={(data) => handleFormDataChange(data, "CopyrightApplication")}
            onPrev={handlePrev}
            onNext={(data) => handleNext(data, 'CopyrightApplication')}
          />
        )}
        {step === 4 && (
          <Step4OwnershipDetails
            formData={formData.Ownership}
            onChange={(data) => handleFormDataChange(data, "Ownership")}
            onPrev={handlePrev}
            onNext={(data) => handleNext(data, 'Ownership')}
          />
        )}
        {step === 5 && (
          <Step5CertificationDetails
            formData={formData.Certification}
            onChange={(data) => handleFormDataChange(data, "Certification")}
            onPrev={handlePrev}
            onSubmit={(data) => handleSubmit(data, 'Certification') }
          />
        )}
      </div>
    </div>
  );
};

export default MainRegistrationForm;
