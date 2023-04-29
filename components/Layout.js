import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({ children, title, description }) => {
	const mode = useSelector(state => state.theme.mode)
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
				<meta name='author' content='Rashed Ahmed' />
				<meta
					name='description'
					content={description ? description : 'Create quizes and share with others!'}
				/>
				<meta name='keywords' content='quiz, system, exam' />
				<meta property='og:type' content='website' />
				<meta property='og:title' content='Welcome to QuizSystem' />
				<meta property='og:image' content='https://quizsystem.vercel.app/thumbnail.png' />
				<meta
					property='og:description'
					content='Attempt public quizes, or enter quiz-key to attempt a private quiz.
					Create quizes and share with others! Happy Knowledge sharing!'
				/>
			</Head>
			<NavBar />
			<div className='marginTop'>{children}</div>
			<Footer />
		</>
	)
}

export default Layout
