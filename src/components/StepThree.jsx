import { useContext } from 'react';
import { FormContext } from "./Context";
import { motion } from "framer-motion";

function StepThree() {
  
  const {name, email, topics, setStep, setName, setEmail, setTopics} = useContext(FormContext);

  function handleSubmit(e) {
    e.preventDefault();
    alert('your account created successfully');
    location.reload();
  }

  return (

    <motion.form onSubmit={(e) => handleSubmit(e)} className="bg-[#212936] p-10 rounded-xl border border-[#4D5562] w-full max-w-md" autoComplete="off" initial={{y:'50px', opacity:0}} animate={{y:"0", opacity:1}} transition={{ease:"easeInOut", duration:1}}>

      <h1 className="text-xl mb-7">Summary</h1>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-[#A1A1A9]">Name: <span className="text-white">{name}</span></h3>
          <h3 className="text-[#A1A1A9]">Email: <span className="text-white">{email}</span></h3>
        </div>
        <div>
          <h3 className="text-[#A1A1A9] mb-1.5">Topics:</h3>
          <ul>
            {topics.map((topic, index) => (
              <li className={`text-white ${index === topics.length - 1 && 'mt-1'}`} key={topic.id}>{topic.title}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-7 text-center">
        <button className=" py-2 px-3 w-36 rounded-full bg-gradient-to-b from-[#845EEE] to-[#652CD1] hover:opacity-80 duration-200 disabled:opacity-50">Confirm</button>
      </div>

    </motion.form>

  )

}

export default StepThree;