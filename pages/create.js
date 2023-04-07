import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { PlusIcon, TickIcon } from '../assets/Icons'
import { addQuestion } from '../state/question'
import Layout from '../components/Layout'
import Image from 'next/image'
import Options from '../components/create/Options'

const CreateQuiz = () => {
	const router = useRouter()
	const dispatch = useDispatch()
	const [activeQues, setActiveQues] = useState(0)
	const question = useSelector(state => state.question)

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
									<Options item={itm} idx={idx} active={activeQues} />
								</div>
							))
						) : (
							<p>No Questions</p>
						)}

						<div className='add-questions'>
							<button className='btn btn-success me-2' onClick={() => dispatch(addQuestion())}>
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

export default CreateQuiz
