import OptionToolbar from './OptionToolbar'

const Options = ({ item, idx, active }) => {
	const type = item.type
	const data = item.options
	return (
		<div className='options'>
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

export default Options
