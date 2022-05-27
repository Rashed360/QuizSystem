import { Routes, Route } from 'react-router-dom'
import App from './App'
import Homepage from './Homepage'
import About from './About'
import JoinNow from './JoinNow'
import NoMatch from './NoMatch'

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<App />}>
				<Route index element={<Homepage />} />
				<Route path='about' element={<About />} />
			</Route>
			<Route path='/join' element={<JoinNow />} />
			<Route path='*' element={<NoMatch />} />
		</Routes>
	)
}

export default Router
