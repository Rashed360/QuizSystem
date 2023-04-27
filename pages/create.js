import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { PlusIcon, TickIcon, CrossIcon } from 'assets/Icons'
import { addQuestion } from 'state/question'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
import Layout from 'components/Layout'
import Image from 'next/image'
import Options from 'components/create/Options'

const CreateQuiz = () => {
	const router = useRouter()
	const dispatch = useDispatch()
	const [settings, setSettings] = useState(false)
	const [activeTab, setActiveTab] = useState(0)
	const [activeQues, setActiveQues] = useState(0)
	const question = useSelector(state => state.question)
	const settingsToggle = () => setSettings(!settings)
	const activeTabSwitch = tab => setActiveTab(tab)

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
							<button className='btn btn-warning me-2' onClick={settingsToggle}>
								<TickIcon /> Settings
							</button>
							<button className='btn btn-dark text-light' onClick={() => router.push('/publish')}>
								<TickIcon /> Publish Quiz
							</button>
						</div>
					</div>
					{settings && (
						<div className='quiz-settings'>
							<div className='setting-window'>
								<div className='title-bar'>
									<h5>Quiz Settings</h5>
									<button onClick={settingsToggle}>
										<CrossIcon />
									</button>
								</div>
								<div className='menu-bar-container'>
									<div className='menu-bar'>
										<div
											onClick={() => activeTabSwitch(0)}
											className={`menu${activeTab === 0 ? ' active' : ''}`}
										>
											General
										</div>
										<div
											onClick={() => activeTabSwitch(1)}
											className={`menu${activeTab === 1 ? ' active' : ''}`}
										>
											Time
										</div>
										<div
											onClick={() => activeTabSwitch(2)}
											className={`menu${activeTab === 2 ? ' active' : ''}`}
										>
											Option
										</div>
										<div
											onClick={() => activeTabSwitch(3)}
											className={`menu${activeTab === 3 ? ' active' : ''}`}
										>
											Answers
										</div>
									</div>
								</div>
								<div className='client-area'>
									{activeTab === 0 && (
										<>
											<div className='option'>
												<input type='checkbox' name='' />
												<label htmlFor=''>All questions are required.</label>
											</div>
											<div className='option'>
												<input type='checkbox' name='' />
												<label htmlFor=''>Random apperence.</label>
											</div>
										</>
									)}
									{activeTab === 1 && (
										<>
											<div className='option'>
												<input type='checkbox' name='' />
												<label htmlFor=''>Specific start and end time.</label>
											</div>
											<div className='option'>
												<input type='checkbox' name='' />
												<label htmlFor=''>Specific time for each question.</label>
											</div>
										</>
									)}
									{activeTab === 2 && (
										<>
											<div className='option'>
												<input type='checkbox' name='' />
												<label htmlFor=''>Shuffle every options.</label>
											</div>
											<div className='option'>
												<input type='checkbox' name='' />
												<label htmlFor=''>Show progress bar.</label>
											</div>
										</>
									)}
									{activeTab === 3 && (
										<>
											<div className='option'>
												<input type='checkbox' name='' />
												<label htmlFor=''>Show answers instantly.</label>
											</div>
										</>
									)}
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</Layout>
	)
}

export default CreateQuiz
