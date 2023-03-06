import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { BsShare, BsPlusLg, BsCheckLg } from 'react-icons/bs'
import { FaRegCopy } from 'react-icons/fa'
import { GrLinkDown, GrTrash } from 'react-icons/gr'

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

						<div className='question short'>
							<h3>Question Title</h3>
							<p>Question Description (Optional)</p>
							<div className='options'>
								<div className='btn-toolbar add-option'>
									<div className='input-group me-2'>
										<input type='text' className='form-control' placeholder='Options Type' />
										<button className='btn btn-warning'>
											Select Type <BsPlusLg />
										</button>
									</div>
									<button className='btn btn-info'>
										Add Option <GrLinkDown />
									</button>
								</div>
								<div className='current-options mt-2'>
									<input type='text' className='form-control' placeholder='Short Answer' />
								</div>
							</div>
						</div>

						<div className='add-questions'>
							<button className='btn btn-success me-2'>
								Add Question <GrLinkDown />
							</button>
							<button className='btn btn-secondary'>
								<BsCheckLg /> Publish Quiz
							</button>
						</div>

						<div className='question long my-3'>
							<div className='options'>
								<div className='btn-toolbar add-option'>
									<div className='input-group'>
										<input type='text' className='form-control' placeholder='Options Type' />
										<button className='btn btn-warning'>
											Select Type <BsPlusLg />
										</button>
									</div>
									<button className='btn btn-info mx-2'>
										Add Option <GrLinkDown />
									</button>
									<button className='btn btn-danger'>
										<GrTrash />
									</button>
								</div>
								<div className='current-options mt-2'>
									<textarea className='form-control' placeholder='Descriptive Answer' rows='5'></textarea>
								</div>
							</div>
						</div>

						<div className='question mcq my-3'>
							<div className='options'>
								<div className='btn-toolbar add-option'>
									<div className='input-group me-2'>
										<input
											type='text'
											className='form-control'
											placeholder='Options Type'
											value='Multiple Choice'
										/>
										<button className='btn btn-warning'>
											Select Type <BsPlusLg />
										</button>
									</div>
									<button className='btn btn-info'>
										Add Option <GrLinkDown />
									</button>
								</div>
								<div className='current-options mt-2'>
									<div>
										<input type='checkbox' name='one' />
										<label for='one'>Choice One Title</label>
									</div>
									<div>
										<input type='checkbox' name='two' />
										<label for='two'>Choice Two Title</label>
									</div>
								</div>
							</div>
						</div>

						<div className='question trfl my-3'>
							<div className='options'>
								<div className='btn-toolbar add-option'>
									<div className='input-group me-2'>
										<input
											type='text'
											className='form-control'
											placeholder='Options Type'
											value='True/False'
										/>
										<button className='btn btn-warning'>
											Select Type <BsPlusLg />
										</button>
									</div>
									<button className='btn btn-info'>
										Add Option <GrLinkDown />
									</button>
								</div>
								<div className='current-options mt-2'>
									<div>
										<input type='radio' name='trfl' />
										<label for=''>Option Title (True)</label>
									</div>
									<div>
										<input type='radio' name='trfl' />
										<label for=''>Option Title (False)</label>
									</div>
								</div>
							</div>
						</div>

						<div className='quiz-header'>
							<h1>Quiz "Title" Created Successfully</h1>
							<p>Share the quiz link or Copy the Quiz-Key.</p>
							<form>
								<div className='btn-toolbar' role='toolbar' aria-label='Toolbar with button groups'>
									<div className='btn-group me-2'>
										<Link href='/create' className='btn btn-info'>
											<BsShare /> Share Link
										</Link>
									</div>
									<div className='input-group'>
										<input
											type='text'
											className='form-control'
											value='kjnb-ytde-astq'
											placeholder='Quiz-key'
										/>
										<button className='btn btn-success'>
											Copy Key <FaRegCopy />
										</button>
									</div>
								</div>
							</form>
						</div>

						{/* - */}
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default CreateQuiz
