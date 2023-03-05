import Link from 'next/link'
import { FaPlus, FaArrowRight } from 'react-icons/fa'
import QuizCard from './QuizCard'

const HomeMain = () => {
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
								<div class='btn-toolbar' role='toolbar' aria-label='Toolbar with button groups'>
									<div class='btn-group me-2'>
										<Link href='/create' className='btn btn-info'>
											<FaPlus /> Create
										</Link>
									</div>
									<div class='input-group'>
										<input type='text' class='form-control' placeholder='Enter quiz-key' />
										<button class='btn btn-success' id='basic-addon2'>
											Attend <FaArrowRight />
										</button>
									</div>
								</div>
							</form>
						</section>
						<section className='content-section'>
							<h3>Popular public quizes</h3>
							<div className='quiz-cards'>
								<QuizCard />
								<QuizCard />
								<QuizCard />
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeMain
