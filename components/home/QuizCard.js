import { FaCheck, FaStar, FaRegEye } from 'react-icons/fa'
import { useRouter } from 'next/router'
import Image from 'next/image'

const QuizCard = ({ question }) => {
	const { _id, title, description, image } = question
	const router = useRouter()
	return (
		<div className='quizCard'>
			<div className='image'>
				//TODO: image container needs fixes
				{/* <Image src={image} fill alt='' /> */}
				<Image src={image} width={220} height={200} alt='' />
			</div>
			<div className='details'>
				<h5>{title}</h5>
				<p>{description}</p>
				<div className='interaction'>
					<div className='buttons'>
						<button className='btn btn-success me-2' onClick={() => router.push(`/attend/${_id}`)}>
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
