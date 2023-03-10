import { useState } from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { BsPlusLg, BsCheckLg } from 'react-icons/bs'
import { GrLinkDown, GrTrash } from 'react-icons/gr'

const CreateQuiz = () => {
	const router = useRouter()
	const [question, setQuestion] = useState({
		image: '',
		title: 'Quiz Title',
		description: 'Quiz Description',
		questions: [
			{
				id: 1,
				title: 'Question Title',
				description: 'Question Description (Optional)',
				type: 'short',
				options: [],
			},
			{
				id: 2,
				title: 'Question Title',
				description: 'Question Description (Optional)',
				type: 'long',
				options: [],
			},
			{
				id: 3,
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
				id: 4,
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
				],
			},
		],
	})

	return (
		<Layout>
			<div className='container'>
				<div className='row d-flex justify-content-center'>
					<div className='col-lg-8 create-quiz'>
						{/* - */}
						<div className='image-box'>
							{question.image && <Image src='' alt='' />}
							<span>Click to add image</span>
						</div>

						<div className='quiz-header'>
							<h1>{question.title}</h1>
							<p>{question.description}</p>
						</div>

						{question.questions.map((itm, idx) => (
							<div className={`question ${itm.type} my-3`} key={idx}>
								<h3>{itm.title}</h3>
								<p>{itm.description}</p>
								<Options type={itm.type} data={itm.options} />
							</div>
						))}

						<div className='add-questions'>
							<button className='btn btn-success me-2'>
								Add Question <GrLinkDown />
							</button>
							<button className='btn btn-secondary' onClick={() => router.push('/publish')}>
								<BsCheckLg /> Publish Quiz
							</button>
						</div>

						{/* - */}
					</div>
				</div>
			</div>
		</Layout>
	)
}

const Options = ({ type, data }) => {
	return (
		<div className='options'>
			<OptionToolbar optionType={type} />

			{data && (
				<div className='current-options mt-2'>
					{type === 'mcq' ? (
						data.map((itm, idx) => (
							<div key={idx}>
								<input type='checkbox' name={itm.name} />
								<label htmlFor={itm.name}>{itm.title}</label>
							</div>
						))
					) : type === 'trfl' ? (
						data.map((itm, idx) => (
							<div key={idx}>
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

const OptionToolbar = ({ optionType }) => {
	const defaultValues = () => {
		if (optionType === 'mcq') return 'Multiple Choice'
		else if (optionType === 'trfl') return 'True/False'
		else return ''
	}
	return (
		<div className='btn-toolbar add-option'>
			<div className='input-group'>
				<input
					type='text'
					className='form-control'
					placeholder='Options Type'
					defaultValue={defaultValues()}
				/>
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
	)
}

export default CreateQuiz
