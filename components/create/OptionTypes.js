export const Ratio = ({ itm }) => {
	const { name, title } = itm
	return <div className='input-container'>Ratio</div>
}

export const Linear = ({ itm }) => {
	const { name, title } = itm
	return <div className='input-container'>Linear</div>
}

export const Img = ({ itm }) => {
	const { name, title } = itm
	return <div className='input-container'>Img</div>
}

export const Doc = ({ itm }) => {
	const { name, title } = itm
	return <div className='input-container'>Doc</div>
}

export const File = ({ itm }) => {
	const { name, title } = itm
	return <div className='input-container'>File</div>
}

export const Drop = ({ itm }) => {
	const { name, title } = itm
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
