import Link from 'next/link'
import Logo from 'assets/logoText.svg'
import Image from 'next/image'
import AnimatedLogo from './AnimatedLogo'
import { useState } from 'react'

const NavBar = () => {
	const [navbar, setNavbar] = useState(false)
	const navbarToggler = () => setNavbar(!navbar)
	return (
		<nav className='navbar navbar-expand-md fixed-top navbar-light'>
			<div className='container'>
				<Link href='/' className='navbar-brand'>
					<AnimatedLogo /> <Image src={Logo} alt='' />
				</Link>
				<button className='navbar-toggler' type='button' onClick={navbarToggler}>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className={`collapse navbar-collapse${navbar ? ' show' : ''}`}>
					<Link href='/join' className='btn nav-button'>
						Join Now
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
