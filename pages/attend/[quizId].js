import { useState } from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'
import FETCHED_QUESTIONS from 'data/mockQuestions'

const AttendQuiz = () => {
	const { query } = useRouter()
	const quizId = query.quizId
	const [answers, setAnswers] = useState([])
	const question = FETCHED_QUESTIONS.find(itm => itm._id === quizId)

	return (
		<Layout title={question?.title} description={question?.description}>
			<Head>
				<meta property='og:title' content={question?.title} />
				<meta property='og:image' content={question?.image} />
				<meta property='og:description' content={question?.description} />
			</Head>
			<div className='container'>
				<div className='row d-flex justify-content-center'>
					{question && (
						<div className='col-lg-8 create-quiz'>
							<div className='image-box'>
								{question.image && <Image src={question.image} fill alt='' />}
								<span>{quizId}</span>
							</div>

							<div className='quiz-header'>
								<h1>{question.title}</h1>
								<p>{question.description}</p>
							</div>

							{question.questions.map((itm, idx) => (
								<div className={`question ${itm.type} my-3`} key={idx}>
									<h3>{`${idx + 1}. ${itm.title}`}</h3>
									<p>{itm.description}</p>
									<Options item={itm} index={idx} ans={answers} setAns={setAnswers} />
								</div>
							))}

							<div className='add-questions'>
								<button className='btn btn-success me-2'>Submit Answers</button>
								<button className='btn btn-dark text-light'>Save Draft</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</Layout>
	)
}

const Options = ({ item, index, ans, setAns }) => {
	const type = item.type
	const data = item.options
	const handleChange = e => {
		const answers = [...ans]
		answers[index] = e.target.value
		setAns(answers)
	}
	return (
		<div className='options'>
			{data && (
				<div className='current-options mt-2'>
					{type === 'mcq' ? (
						data.map((itm, idx) => (
							<div key={idx} className='input-container'>
								<input type='checkbox' name={itm.name} value={ans[index] || ''} onChange={handleChange} />
								<label htmlFor={itm.name}>{itm.title}</label>
							</div>
						))
					) : type === 'trfl' ? (
						data.map((itm, idx) => (
							<div key={idx} className='input-container'>
								<input type='radio' name={itm.name} value={ans[index] || ''} onChange={handleChange} />
								<label htmlFor=''>{itm.title}</label>
							</div>
						))
					) : type === 'long' ? (
						<textarea
							className='form-control'
							placeholder='Descriptive Answer'
							rows='5'
							value={ans[index] || ''}
							onChange={handleChange}
						></textarea>
					) : (
						<input
							type='text'
							className='form-control'
							placeholder='Short Answer'
							value={ans[index] || ''}
							onChange={handleChange}
						/>
					)}
				</div>
			)}
		</div>
	)
}

export default AttendQuiz
