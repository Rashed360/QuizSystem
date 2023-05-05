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
		switch (optionType) {
			case 'range':
				setInputValue('Ratio Scale')
				break
			case 'linear':
				setInputValue('Linear Scale')
				break
			case 'img':
				setInputValue('Images')
				break
			case 'doc':
				setInputValue('Documents')
				break
			case 'file':
				setInputValue('Any File')
				break
			case 'drop':
				setInputValue('Dropdown')
				break
			case 'trfl':
				setInputValue('True/False')
				break
			case 'mcq':
				setInputValue('Multiple Choice')
				break
			case 'long':
				setInputValue('Long Question')
				break
			case 'short':
				setInputValue('Short Question')
				break
			default:
				setInputValue('')
				break
		}
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
