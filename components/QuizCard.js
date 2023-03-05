import { FaCheck, FaStar, FaRegEye } from 'react-icons/fa'
import Image from 'next/image'
import sample from '../assets/sample.png'

const QuizCard = () => {
	return (
		<div className='quizCard'>
			<div className='image'>
				<Image src={sample} alt='' />
			</div>
			<div className='details'>
				<h5>Are you smarter than world's smartest ape?</h5>
				<p>
					To say that Kanzi, a Bonobo ape that resides at The Great Ape Sanctuary outside Des Moines, Iowa, is
					smarter than a human bady toddler, may be understating this matter. It's because of the
				</p>
				<div className='interaction'>
					<div className='buttons'>
						<button className='btn btn-success me-2'>
							<FaCheck /> Attempt
						</button>
						<button className='btn btn-info me-2'>
							<FaStar /> Wishlist
						</button>
					</div>
					<span>
						<FaRegEye /> 253
					</span>
				</div>
			</div>
		</div>
	)
}

export default QuizCard
