import { useState } from 'react'
import { FaPlus, FaArrowRight } from 'react-icons/fa'
import { useRouter } from 'next/router'
import Link from 'next/link'
import QuizCard from './QuizCard'
import FETCHED_QUESTIONS from 'data/mockQuestions'

const HomeMain = () => {
	const [quizId, setQuizId] = useState('')
	const router = useRouter()
	function attendQuiz(e) {
		e.preventDefault()
		if (quizId) router.push(`/attend/${quizId}`)
	}

	return (
		<div className='col-lg-9'>
			<div className='row homepage-main'>
				<div className='container'>
					<div className='col-lg-11'>
						<section className='hero-section'>
							<h1>Welcome to QuizSystem</h1>
							<p>
								Attempt public quizes, or enter quiz-key to attempt a private quiz.
								<br /> Create quizes and share with others! Happy Knowledge sharing!
							</p>
							<form>
								<div className='btn-toolbar' role='toolbar' aria-label='Toolbar with button groups'>
									<div className='btn-group me-2'>
										<Link href='/create' className='btn btn-info'>
											<FaPlus /> Create
										</Link>
									</div>
									<div className='input-group'>
										<input
											type='text'
											className='form-control'
											placeholder='Enter quiz-key'
											value={quizId}
											onChange={e => setQuizId(e.target.value)}
										/>
										<button className='btn btn-success' onClick={e => attendQuiz(e)}>
											Attend <FaArrowRight />
										</button>
									</div>
								</div>
							</form>
						</section>
						<section className='content-section'>
							<h3>Popular public quizes</h3>
							<div className='quiz-cards'>
								{FETCHED_QUESTIONS.map((itm, idx) => (
									<QuizCard key={idx} question={itm} />
								))}
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeMain
