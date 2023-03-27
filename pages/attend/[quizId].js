import { useState } from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image'
import { useRouter } from 'next/router'

const AttendQuiz = () => {
	const { query } = useRouter()
	const quizId = query.quizId
	const [answers, setAnswers] = useState([])
	const question = {
		image: '',
		title: 'Quiz Title',
		description: 'Quiz Description',
		questions: [
			{
				title: 'Question Title',
				description: 'Question Description (Optional)',
				type: 'short',
				options: [],
			},
			{
				title: 'Question Title',
				description: 'Question Description (Optional)',
				type: 'long',
				options: [],
			},
			{
				title: 'Question Title',
				description: 'Question Description (Optional)',
				type: 'mcq',
				options: [
					{
						title: 'Choice One Title',
						name: 'one',
					},
					{
						title: 'Choice Two Title',
						name: 'two',
					},
				],
			},
			{
				title: 'Question Title',
				description: 'Question Description (Optional)',
				type: 'trfl',
				options: [
					{
						title: 'Option Title (True)',
						name: 'trfl',
					},
					{
						title: 'Option Title (False)',
						name: 'trfl',
					},
					{
						title: 'Option Title (False)',
						name: 'trfl',
					},
				],
			},
		],
	}

	return (
		<Layout>
			<div className='container'>
				<div className='row d-flex justify-content-center'>
					<div className='col-lg-8 create-quiz'>
						<div className='image-box'>
							{question.image && <Image src='' alt='' />}
							<span>{quizId}</span>
						</div>

						<div className='quiz-header'>
							<h1>{question.title}</h1>
							<p>{question.description}</p>
						</div>

						{question.questions.map((itm, idx) => (
							<div className={`question ${itm.type} my-3`} key={idx}>
								<h3>{itm.title}</h3>
								<p>{itm.description}</p>
								<Options item={itm} idx={idx} />
							</div>
						))}

						<div className='add-questions'>
							<button className='btn btn-success me-2'>Submit Answers</button>
							<button className='btn btn-dark text-light'>Save Draft</button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

const Options = ({ item, idx }) => {
	const type = item.type
	const data = item.options
	return (
		<div className='options'>
			{data && (
				<div className='current-options mt-2'>
					{type === 'mcq' ? (
						data.map((itm, idx) => (
							<div key={idx} className='input-container'>
								<input type='checkbox' name={itm.name} />
								<label htmlFor={itm.name}>{itm.title}</label>
							</div>
						))
					) : type === 'trfl' ? (
						data.map((itm, idx) => (
							<div key={idx} className='input-container'>
								<input type='radio' name={itm.name} />
								<label htmlFor=''>{itm.title}</label>
							</div>
						))
					) : type === 'long' ? (
						<textarea className='form-control' placeholder='Descriptive Answer' rows='5'></textarea>
					) : (
						<input type='text' className='form-control' placeholder='Short Answer' />
					)}
				</div>
			)}
		</div>
	)
}

export default AttendQuiz
