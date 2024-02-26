import { useState, useContext } from 'react';
import { FormContext } from "./Context";
import { motion } from "framer-motion";

function StepOne() {
  
  const {setStep, setName:setCName, setEmail:setCEmail} = useContext(FormContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [nameError, setNameError] = useState(null);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  function handleInput() {
    let validation = true;

    if(name.trim().length < 1) {
      setNameError('name cannot be empty')
      validation = false;
    } else {
      setNameError(null);
    }

    if(email.trim().length < 1) {
      setNameError('name cannot be empty')
      validation = false;
    } else {
      setEmailError(null);
    }

    const pattern = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/g;

    if(!pattern.test(email)) {
      setEmailError('please provide valid an email')
      validation = false;
    } else {
      setEmailError(null);
    }
    if(!validation) {
      setSubmitDisabled(true);
      return;
    }
    setSubmitDisabled(false);

  }

  function handleSubmit(e) {
    e.preventDefault();
    setCName(name);
    setCEmail(email);
    setStep(2);
  }

  return (

    <motion.form onSubmit={(e) => handleSubmit(e)} className="bg-[#212936] p-10 rounded-xl border border-[#4D5562] w-full max-w-md" autoComplete="off" initial={{y:'50px', opacity:0}} animate={{y:"0", opacity:1}} transition={{ease:"easeInOut", duration:1}}>

      <h1 className="text-xl mb-7">Register</h1>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-[#A1A1A9] text-sm">Name</label>
        <input type="text" id="name" placeholder="enter your name" className="border-2 border-[#4D5562] bg-transparent py-3 px-4 rounded-lg text-sm placeholder:text-[#4D5562] focus:border-[#845EEE] duration-200 outline-none valid:border-[#845EEE]" required value={name} onChange={(e) => {
          setName(e.target.value);
          handleInput();
        }} onBlur={handleInput} />
        {nameError && <small className="text-xs text-red-500">{nameError}</small>}
      </div>
      <div className="flex flex-col mt-3 gap-1.5">
        <label htmlFor="email" className="text-[#A1A1A9] text-sm">Email</label>
        <input type="email" id="email" placeholder="enter your email" className="border-2 border-[#4D5562] bg-transparent py-3 px-4 rounded-lg text-sm placeholder:text-[#4D5562] focus:border-[#845EEE] duration-200 outline-none valid:border-[#845EEE]" required value={email} onChange={(e) => {
          setEmail(e.target.value);
          handleInput();
        }} onBlur={handleInput} />
        {emailError && <small className="text-xs text-red-500">{emailError}</small>}
      </div>

      <div className="mt-7 text-center">
        <button className=" py-2 px-3 w-36 rounded-full bg-gradient-to-b from-[#845EEE] to-[#652CD1] hover:opacity-80 duration-200 disabled:opacity-50" disabled={submitDisabled}>Continue</button>
      </div>

    </motion.form>

  )

}

export default StepOne;