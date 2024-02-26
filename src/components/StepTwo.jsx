import { useState, useContext } from "react";
import { FormContext } from "./Context";
import { motion } from "framer-motion";

const initialTopics = [
	{
		id: 1,
		title: "Software Development",
		active: false,
	},
	{
		id: 2,
		title: "User Experience",
		active: false,
	},
	{
		id: 3,
		title: "Grapic Design",
		active: false,
	},
];

function StepTwo() {
	const [formTopics, setFormTopics] = useState(initialTopics);
	const [submitDisabled, setSubmitDisabled] = useState(true);
	const { setStep, setTopics } = useContext(FormContext);

  console.log(initialTopics);

	function handleSelect(id) {
		const update = formTopics.map((topic) => {
			if (topic.id === id) {
				topic.active = !topic.active;
			}
			return topic;
		});

		setFormTopics(update);

		const haveActive = update.find((topic) => topic.active === true);

		haveActive ? setSubmitDisabled(false) : setSubmitDisabled(true);
	}

	function handleSubmit(e) {
		e.preventDefault();
		const interestedTopics = formTopics.filter(
			(topic) => topic.active === true
		);
		setTopics(interestedTopics);
		setStep(3);
	}

	return (
		<motion.form
			onSubmit={(e) => handleSubmit(e)}
			className="bg-[#212936] p-10 rounded-xl border border-[#4D5562] w-full max-w-md"
			autoComplete="off"
			initial={{ y: "50px", opacity: 0 }}
			animate={{ y: "0", opacity: 1 }}
			transition={{ ease: "easeInOut", duration: 1 }}
		>
			<h1 className="text-xl mb-7">What topics you are interested in?</h1>

			<div className="flex flex-col gap-3">
				{formTopics.map((item) => (
					<button
						className={`p-3.5 bg-[#394150] border border-[#4D5562] text-[#A1A1A9] text-sm rounded-lg text-left duration-200 ${
							item.active
								? "bg-[#652CD1] text-white"
								: "hover:bg-[#845EEE] hover:text-white"
						}`}
						onClick={() => handleSelect(item.id)}
						type="button"
						key={item.id}
					>
						{item.title}
					</button>
				))}
			</div>

			<div className="mt-7 text-center">
				<button
					className=" py-2 px-3 w-36 rounded-full bg-gradient-to-b from-[#845EEE] to-[#652CD1] hover:opacity-80 duration-200 disabled:opacity-50"
					disabled={submitDisabled}
				>
					Continue
				</button>
			</div>
		</motion.form>
	);
}

export default StepTwo;
