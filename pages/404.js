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
			<RiveComponent style={{ width: '375px', height: '95px' }} />
			<p style={{ cursor: 'pointer' }} onClick={() => router.back()}>
				Nothing's Here! Go-Back
			</p>
		</div>
	)
}

export default NoMatch
