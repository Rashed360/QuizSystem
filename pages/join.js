import { useState } from 'react'
import Login from 'components/join/Login'
import SignUp from 'components/join/SignUp'

const JoinPage = () => {
	const [joinMode, setJoinMode] = useState(true)
	const joinModeToggler = () => setJoinMode(!joinMode)

	return (
		<div className='centerAlign'>
			{joinMode ? <Login toggler={joinModeToggler} /> : <SignUp toggler={joinModeToggler} />}
		</div>
	)
}

export default JoinPage
