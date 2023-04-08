import Layout from 'components/Layout'
import HomeMain from 'components/home/HomeMain'
import HomeSide from 'components/home/HomeSide'

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
