import { FaCheck, FaStar, FaRegEye } from 'react-icons/fa'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Banner from 'assets/banner.png'

const QuizCard = ({ question }) => {
	const { _id, title, description, image } = question
	const router = useRouter()
	return (
		<div className='quizCard'>
			<div className='details'>
				<div>
					<h4>{title}</h4>
					<p>{description}</p>
				</div>
				<div className='actions'>
					<div className='buttons'>
						<button className='btn btn-success' onClick={() => router.push(`/attend/${_id}`)}>
							<FaCheck /> <span>Attempt</span>
						</button>
						<button className='btn btn-info'>
							<FaStar /> <span>Wishlist</span>
						</button>
					</div>
					<span className='views'>
						<FaRegEye /> 253
					</span>
				</div>
			</div>
			<div className='image'>
				{image ? (
					<Image src={image} width={1024} height={278} alt={title} />
				) : (
					<Image src={Banner} width={1024} height={278} alt='' />
				)}
			</div>
		</div>
	)
}

export default QuizCard
