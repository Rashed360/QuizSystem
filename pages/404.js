import { useRouter } from 'next/router'
import { useRive } from '@rive-app/react-canvas'

const NoMatch = () => {
	const router = useRouter()
	const { rive, RiveComponent } = useRive({
		src: '/robot_cleaner.riv',
		autoplay: true,
	})
	return (
		<div className='centerAlign'>
			<RiveComponent style={{height: '300px'}} />
			<button className='btn' onClick={() => router.back()}>
				Nothing's Here | Go-Back
			</button>
		</div>
	)
}

export default NoMatch
