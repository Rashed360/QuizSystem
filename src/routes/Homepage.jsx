import HomeMain from 'components/HomeMain'
import HomeSide from 'components/HomeSide'

const Homepage = () => {
	return (
		<div className='container'>
			<div className='row'>
				<HomeMain />
				<HomeSide />
			</div>
		</div>
	)
}

export default Homepage
