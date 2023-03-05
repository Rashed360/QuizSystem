import { useRouter } from 'next/router'

const NoMatch = () => {
	const router = useRouter()
	return (
		<div className='centerAlign'>
			<button className='btn' onClick={() => router.back()}>
				404 😟 Go-Back
			</button>
		</div>
	)
}

export default NoMatch
