import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { PlusIcon, TickIcon, DownIcon, DeleteIcon } from '../assets/Icons'
import QUESTION_TYPES from '../data/questionTypes'

import { useSelector, useDispatch } from 'react-redux'
import { addQuestion, deleteQuestion, changeQuestionType } from '../state/question'

const CreateQuiz = () => {
	const router = useRouter()
	const dispatch = useDispatch()
	const [activeQues, setActiveQues] = useState(0)
	// const [question, setQuestion] = useState()
	const question = useSelector(state => state.question)

	const handleAdd = () => {
		dispatch(addQuestion())
		// setQuestion({
		// 	...question,
		// 	questions: [
		// 		...question.questions,
		// 		{
		// 			title: 'Question Title',
		// 			description: 'Question Description (Optional)',
		// 			type: 'short',
		// 			options: [],
		// 		},
		// 	],
		// })
	}

	return (
		<Layout>
			<div className='container'>
				<div className='row d-flex justify-content-center'>
					<div className='col-lg-8 create-quiz'>
						<div className='image-box'>
							{question.image && <Image src='' alt='' />}
							<span>Click to add image</span>
						</div>

						<div className='quiz-header'>
							<h1>{question.title}</h1>
							<p>{question.description}</p>
						</div>

						{question.questions.length !== 0 ? (
							question.questions.map((itm, idx) => (
								<div className={`question ${itm.type} my-3`} key={idx} onClick={() => setActiveQues(idx)}>
									<h3>{itm.title}</h3>
									<p>{itm.description}</p>
									{/* <Options item={itm} idx={idx} active={activeQues} ques={question} sQues={setQuestion} /> */}
									<Options item={itm} idx={idx} active={activeQues} />
								</div>
							))
						) : (
							<p>Loading...</p>
						)}

						<div className='add-questions'>
							<button className='btn btn-success me-2' onClick={handleAdd}>
								Add Question <PlusIcon />
							</button>
							<button className='btn btn-dark text-light' onClick={() => router.push('/publish')}>
								<TickIcon /> Publish Quiz
							</button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

// const Options = ({ item, idx, active, ques, sQues }) => {
const Options = ({ item, idx, active }) => {
	const type = item.type
	const data = item.options
	return (
		<div className='options'>
			{/* {idx === active && <OptionToolbar optionType={type} id={idx} ques={ques} sQues={sQues} />} */}
			{idx === active && <OptionToolbar optionType={type} id={idx} />}

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

// const OptionToolbar = ({ optionType, id, ques, sQues }) => {
const OptionToolbar = ({ optionType, id }) => {
	const [toolbar, setToolbar] = useState(false)
	const [inputValue, setInputValue] = useState('')
	const categories = QUESTION_TYPES
	const dispatch = useDispatch()

	useEffect(() => {
		if (optionType === 'mcq') setInputValue('Multiple Choice')
		else if (optionType === 'trfl') setInputValue('True/False')
		else if (optionType === 'long') setInputValue('Long Question')
		else if (optionType === 'short') setInputValue('Short Question')
		else setInputValue('')
	}, [optionType])

	const toggleOptionsToolbar = () => {
		setToolbar(!toolbar)
		//TODO: add propagation functions
	}
	const handleDelete = () => {
		dispatch(deleteQuestion(id))
		// const newQuestions = [...ques.questions]
		// newQuestions.splice(id, 1)
		// sQues({
		// 	...ques,
		// 	questions: newQuestions,
		// })
	}
	const handleTypeChange = type => {
		dispatch(changeQuestionType({ id, type }))
		// const newQuestions = [...ques.questions]
		// const updatedType = { ...ques.questions[id], options: [], type }

		// newQuestions.splice(id, 1, updatedType)
		// sQues({
		// 	...ques,
		// 	questions: newQuestions,
		// })
		toggleOptionsToolbar()
	}
	return (
		<div className='btn-toolbar add-option'>
			{toolbar && (
				<div className='option-toolbar'>
					{categories.map((itm, idx) => (
						<section key={idx}>
							<label>{itm.title}</label>
							{itm.options.map((item, index) => (
								<div className='categories' key={index} onClick={() => handleTypeChange(item.type)}>
									{item.icon} <span>{item.title}</span>
								</div>
							))}
						</section>
					))}
				</div>
			)}
			<div className='input-group' onClick={toggleOptionsToolbar}>
				<input
					type='text'
					className='form-control'
					placeholder='Options Type'
					value={inputValue}
					readOnly
					style={{ cursor: 'pointer' }}
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
