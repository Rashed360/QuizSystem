import FaqCard from './FaqCard'

const HomeSide = () => {
	return (
		<div className='col-lg-3'>
			<div className='row homepage-side'>
				<div className='fixed-area'>
					<h5>Frequently Asked Questions</h5>
					<div className='faqs'>
						<FaqCard />
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeSide
