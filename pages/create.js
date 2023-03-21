import { useState } from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { PlusIcon, TickIcon, DownIcon, DeleteIcon } from '../assets/Icons'

const CreateQuiz = () => {
	const router = useRouter()
	const [activeQues, setActiveQues] = useState(0)
	const [question, setQuestion] = useState({
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
				],
			},
		],
	})

	const handleAdd = () => {
		setQuestion({
			...question,
			questions: [
				...question.questions,
				{
					title: 'Question Title',
					description: 'Question Description (Optional)',
					type: 'short',
					options: [],
				},
			],
		})
	}

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
							<div className={`question ${itm.type} my-3`} key={idx} onClick={() => setActiveQues(idx)}>
								<h3>{itm.title}</h3>
								<p>{itm.description}</p>
								<Options item={itm} idx={idx} active={activeQues} ques={question} sQues={setQuestion} />
							</div>
						))}

						<div className='add-questions'>
							<button className='btn btn-success me-2' onClick={handleAdd}>
								Add Question <PlusIcon />
							</button>
							<button className='btn btn-dark text-light' onClick={() => router.push('/publish')}>
								<TickIcon /> Publish Quiz
							</button>
						</div>

						{/* - */}
					</div>
				</div>
			</div>
		</Layout>
	)
}

const Options = ({ item, idx, active, ques, sQues }) => {
	const type = item.type
	const data = item.options
	return (
		<div className='options'>
			{idx === active && <OptionToolbar optionType={type} id={idx} ques={ques} sQues={sQues} />}

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

const OptionToolbar = ({ optionType, id, ques, sQues }) => {
	const defaultValues = () => {
		if (optionType === 'mcq') return 'Multiple Choice'
		else if (optionType === 'trfl') return 'True/False'
		else return ''
	}
	const handleDelete = () => {
		const newQuestions = [...ques.questions]
		newQuestions.splice(id, 1)
		sQues({
			...ques,
			questions: newQuestions,
		})
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
					Select Type <DownIcon />
				</button>
			</div>
			<button className='btn btn-info mx-2'>
				Add Option <PlusIcon />
			</button>
			<button className='btn btn-danger' onClick={handleDelete}>
				<DeleteIcon />
			</button>
		</div>
	)
}

export default CreateQuiz