import Layout from '../components/Layout'
import Image from 'next/image'

const CreateQuiz = () => {
	return (
		<Layout>
			<div className='container'>
				<div className='row d-flex justify-content-center'>
					<div className='col-lg-8 create-quiz'>
						{/* - */}
						<div className='image-box'>
							<Image src='' alt='' />
							<span>Click to add image</span>
						</div>

						<div className='quiz-header'>
							<h1>Quiz Title</h1>
							<p>Quiz Description</p>
						</div>

						<div className='question'>
							<h3>Question Title</h3>
							<p>Question Description (Optional)</p>
							<div className='options'>
								<div className='btn-toolbar add-option'>
									<div className='input-group me-2'>
										<input type='text' className='form-control' placeholder='Options Type' />
										<button className='btn btn-warning'>Select Type</button>
									</div>
									<button className='btn btn-info'>Add Option</button>
								</div>
								<div className='current-options mt-2'>
									<input type='text' className='form-control' placeholder='Short Answer' />
								</div>
							</div>
						</div>

						<div className='add-questions'>
							<button className='btn btn-success me-2'>Add Question</button>
							<button className='btn btn-secondary'>Publish Quiz</button>
						</div>

						{/* - */}
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default CreateQuiz
