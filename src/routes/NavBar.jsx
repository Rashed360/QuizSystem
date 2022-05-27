import { Link } from 'react-router-dom'
import logo from 'assets/logo.svg'

const NavBar = () => {
	return (
		<nav class='navbar navbar-expand-md fixed-top navbar-light'>
			<div class='container'>
				<Link to='/' class='navbar-brand'>
					<img src={logo} alt='' />
				</Link>
				<button
					class='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div class='collapse navbar-collapse' id='navbarSupportedContent'>
					<Link to='/join' class='btn nav-button'>
						Join Now
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
