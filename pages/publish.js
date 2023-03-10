import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { BsShare } from 'react-icons/bs'
import { FaRegCopy } from 'react-icons/fa'

const CreateQuiz = () => {
	return (
		<Layout>
			<div className='container'>
				<div className='row d-flex justify-content-center'>
					<div className='col-lg-8 create-quiz'>
						<div className='image-box'>
							<Image src='' alt='' />
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
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default CreateQuiz
