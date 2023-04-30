import { useState } from 'react'
import { CrossIcon } from 'assets/Icons'

const QuizSettings = ({ settingsToggle }) => {
	const [activeTab, setActiveTab] = useState(0)
	const activeTabSwitch = tab => setActiveTab(tab)

	return (
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
						<div onClick={() => activeTabSwitch(0)} className={`menu${activeTab === 0 ? ' active' : ''}`}>
							General
						</div>
						<div onClick={() => activeTabSwitch(1)} className={`menu${activeTab === 1 ? ' active' : ''}`}>
							Time
						</div>
						<div onClick={() => activeTabSwitch(2)} className={`menu${activeTab === 2 ? ' active' : ''}`}>
							Option
						</div>
						<div onClick={() => activeTabSwitch(3)} className={`menu${activeTab === 3 ? ' active' : ''}`}>
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
	)
}

export default QuizSettings
