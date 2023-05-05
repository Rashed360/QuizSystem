import { UploadIcon } from 'assets/Icons'

export const Range = () => {
	return <div className='input-container'>Range</div>
}

export const Linear = ({ min = 0, max = 10, mind = 'Worst', maxd = 'Excellent' }) => {
	return (
		<div className='range-container'>
			<input type='range' min={min} max={max} defaultValue={(min + max) / 2} />
			<div className='marks'>
				{[...Array(max - min + 1)].map((_, i) => (
					<span key={i}></span>
				))}
			</div>
			<div className='denominators'>
				<span>{mind}</span>
				<span>{maxd}</span>
			</div>
		</div>
	)
}

export const Img = () => {
	return (
		<div className='files-container'>
			<button>
				<UploadIcon /> Upload Image
			</button>
			<div className='group'>
				<span>Max Images</span>
				<input type='number' placeholder='99' max={99} min={1} style={{ width: '61px' }} />
			</div>
			<div className='group'>
				<span>Max Size</span>
				<input type='number' placeholder='999' max={500} min={1} style={{ width: '71px' }} />
				<span>Mb</span>
			</div>
		</div>
	)
}

export const Doc = () => {
	return (
		<div className='files-container'>
			<button>
				<UploadIcon /> Upload Document
			</button>
			<div className='group'>
				<span>Max Documents</span>
				<input type='number' placeholder='99' max={99} min={1} style={{ width: '61px' }} />
			</div>
			<div className='group'>
				<span>Max Size</span>
				<input type='number' placeholder='999' max={500} min={1} style={{ width: '71px' }} />
				<span>Mb</span>
			</div>
		</div>
	)
}

export const File = () => {
	return (
		<div className='files-container'>
			<button>
				<UploadIcon /> Upload File
			</button>
			<div className='group'>
				<span>Max Files Number</span>
				<input type='number' placeholder='99' max={99} min={1} style={{ width: '60px' }} />
			</div>
			<div className='group'>
				<span>Max File Size</span>
				<input type='number' placeholder='999' max={500} min={1} style={{ width: '70px' }} />
				<span>Mb</span>
			</div>
		</div>
	)
}

export const Drop = () => {
	return <div className='input-container'>Drop</div>
}

export const Trfl = ({ itm }) => {
	const { name, title } = itm
	return (
		<div className='input-container'>
			<input type='radio' name={name} />
			<label htmlFor=''>{title}</label>
		</div>
	)
}

export const Mcq = ({ itm }) => {
	const { name, title } = itm
	return (
		<div className='input-container'>
			<input type='checkbox' name={name} />
			<label htmlFor={name}>{title}</label>
		</div>
	)
}

export const Long = () => {
	return <textarea className='form-control' placeholder='Descriptive Answer' rows='5'></textarea>
}

export const Short = () => {
	return <input type='text' className='form-control' placeholder='Short Answer' />
}
