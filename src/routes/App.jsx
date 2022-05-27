import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'

const App = () => {
	return (
		<>
			<NavBar />
			<div className='marginTop'>
				<Outlet />
			</div>
			<Footer />
		</>
	)
}

export default App
