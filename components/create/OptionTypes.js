import { UploadIcon } from 'assets/Icons'

export const Range = () => {
	return <div className='input-container'>Range</div>
}

export const Linear = () => {
	return <div className='input-container'>Linear</div>
}

export const Img = () => {
	return <div className='input-container'>Img</div>
}

export const Doc = () => {
	return <div className='input-container'>Doc</div>
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
