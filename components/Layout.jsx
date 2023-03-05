import Head from 'next/head'
import NavBar from '.NavBar'
import Footer from './Footer'

const Layout = ({ children, title }) => {
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
