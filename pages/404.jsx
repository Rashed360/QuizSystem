import { useNavigate } from 'react-router-dom'

const NoMatch = () => {
	const navigate = useNavigate()
	return (
		<div className='centerAlign'>
			<button className='btn' onClick={() => navigate(-1)}>
				404 😟 Go-Back
			</button>
		</div>
	)
}

export default NoMatch
