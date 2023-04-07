import Layout from 'components/Layout'
import HomeMain from 'components/HomeMain'
import HomeSide from 'components/HomeSide'

const Homepage = () => {
	return (
		<Layout>
			<div className='container'>
				<div className='row'>
					<HomeMain />
					<HomeSide />
				</div>
			</div>
		</Layout>
	)
}

export default Homepage
