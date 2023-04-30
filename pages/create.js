import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { PlusIcon, TickIcon } from 'assets/Icons'
import { addQuestion } from 'state/question'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
import Layout from 'components/Layout'
import Image from 'next/image'
import Banner from 'assets/banner.png'
import Options from 'components/create/Options'
import QuizSettings from 'components/create/QuizSettings'

const CreateQuiz = () => {
	const router = useRouter()
	const dispatch = useDispatch()

	const [settings, setSettings] = useState(false)
	const settingsToggle = () => setSettings(!settings)

	const [activeQues, setActiveQues] = useState(0)
	const question = useSelector(state => state.question)
	const { image, title, description, questions } = question

	return (
		<Layout>
			<div className='container'>
				<div className='row d-flex justify-content-center'>
					<div className='col-lg-8 create-quiz'>
						<div className='image-box'>
							{<Image src={image ? image : Banner} width={1024} height={278} alt='banner' />}
							<span>Click to add image (1024x278)</span>
						</div>

						<div className='quiz-header'>
							<h1>{title}</h1>
							<p>{description}</p>
						</div>

						{questions.length !== 0 ? (
							questions.map((itm, idx) => (
								<div className={`question ${itm.type} my-3`} key={idx} onClick={() => setActiveQues(idx)}>
									<h3>{itm.title}</h3>
									<p>{itm.description}</p>
									<Options item={itm} idx={idx} active={activeQues} />
								</div>
							))
						) : (
							<p>No questions to show.</p>
						)}

						<div className='add-questions'>
							<button className='btn btn-success me-2' onClick={() => dispatch(addQuestion())}>
								Add Question <PlusIcon />
							</button>
							<button className='btn btn-warning me-2' onClick={settingsToggle}>
								<TickIcon /> Settings
							</button>
							<button className='btn btn-dark text-light' onClick={() => router.push('/publish')}>
								<TickIcon /> Publish Quiz
							</button>
						</div>
					</div>
					{settings && <QuizSettings settingsToggle={settingsToggle} />}
				</div>
			</div>
		</Layout>
	)
}

export default CreateQuiz
