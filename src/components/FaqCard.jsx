import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

const FaqCard = ({ active }) => {
	const [toggle, setToggle] = useState(active)
	const toggleAction = () => {
		setToggle(!toggle)
	}
	return (
		<div className='faqCard'>
			<div className='control' onClick={toggleAction}>
				<h6>How do I create a quiz in QuizSystem?</h6>
				{toggle ? <FaMinus /> : <FaPlus />}
			</div>
			<p className={toggle && 'active'}>
				All you need to use QuizSystem is an internet connection and a smart phone!
			</p>
		</div>
	)
}

export default FaqCard
