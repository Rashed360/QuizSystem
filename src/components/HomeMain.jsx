import { Link } from 'react-router-dom'
import QuizCard from './QuizCard'

const HomeMain = () => {
	return (
		<div className='col-lg-9'>
			<div className='row homepage-main'>
				<div className='container'>
					<div className='col-lg-11'>
						<section className='hero-section'>
							<h1>Welcome to QuizSystem</h1>
							<p>Attempt public quizes, or enter quiz-key to attempt a private quiz.</p>
							<form>
								<div class='input-group mb-3'>
									<div className='me-2'>
										<Link className='btn btn-info' to='create'>
											Create
										</Link>
									</div>
									<input type='text' class='form-control' placeholder='Enter quiz-key' />
									<button class='btn btn-success' id='basic-addon2'>
										Attend
									</button>
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
