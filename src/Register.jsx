import { useEffect, useState } from 'react';
import StepOne from "./components/StepOne"
import StepTwo from "./components/StepTwo"
import StepThree from "./components/StepThree"
import { FormContext } from "./components/Context";

function Register() {

  const [step, setStep] = useState(1);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [topics, setTopics] = useState([]);

  return (
    <FormContext.Provider value={{step, setStep, name, setName, email, setEmail, topics, setTopics}}>
    {step === 1 && <StepOne />}
    {step === 2 && <StepTwo />}
    {step === 3 && <StepThree />}
    <div className="mt-6 text-sm flex items-center gap-8">
      <div className="text-[#394150] font-medium">Step {step} of 3</div>
      <div className="flex items-center gap-2.5">
        <div className={`w-4 h-4 rounded-full bg-[#652CD1] shadow-[0_0_7px_#845EEE] border-2 border-neutral-800`}></div>
        <div className={`w-4 h-4 ${step >= 2 ? 'bg-[#652CD1] shadow-[0_0_7px_#845EEE]' : 'bg-[#394150]'} rounded-full border-2 border-neutral-800`}></div>
        <div className={`w-4 h-4 ${step == 3 ? 'bg-[#652CD1] shadow-[0_0_7px_#845EEE]' : 'bg-[#394150]'} rounded-full border-2 border-neutral-800`}></div>
      </div>
    </div>
    </FormContext.Provider>
    )
}

export default Register