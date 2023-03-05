import Link from 'next/link'
import Logo from '../assets/logoText.svg'
import Image from 'next/image'
import AnimatedLogo from './AnimatedLogo'

const NavBar = () => {
	return (
		<nav className='navbar navbar-expand-md fixed-top navbar-light'>
			<div className='container'>
				<Link href='/' className='navbar-brand'>
					<AnimatedLogo /> <Image src={Logo} alt='' />
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<Link href='/join' className='btn nav-button'>
						Join Now
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
