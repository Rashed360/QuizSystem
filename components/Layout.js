import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({ children, title }) => {
	const mode = useSelector(state => state.global.mode)
	useEffect(() => {
		const bodyClass = document.querySelector('body').classList
		if (mode) {
			bodyClass.add('light')
			bodyClass.remove('dark')
		} else {
			bodyClass.add('light')
			bodyClass.remove('dark')
		}
	}, [mode])

	return (
		<>
			<Head>
				<title>{title ? 'Quiz System • ' + title : 'Quiz System'}</title>
			</Head>
			<NavBar />
			<div className='marginTop'>{children}</div>
			<Footer />
		</>
	)
}

export default Layout
