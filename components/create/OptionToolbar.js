import { useState, useEffect } from 'react'
import { PlusIcon, DownIcon, DeleteIcon } from 'assets/Icons'
import { useDispatch } from 'react-redux'
import { deleteQuestion, changeQuestionType } from 'state/question'
import QUESTION_TYPES from 'data/questionTypes'

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

	const toggleOptionsToolbar = () => setToolbar(!toolbar)
	const handleTypeChange = type => {
		dispatch(changeQuestionType({ id, type }))
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
			<button className='btn btn-danger' onClick={() => dispatch(deleteQuestion(id))}>
				<DeleteIcon />
			</button>
		</div>
	)
}

export default OptionToolbar
