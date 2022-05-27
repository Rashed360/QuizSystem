import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from 'assets/logoText.svg'
import AnimatedLogo from 'components/AnimatedLogo'

const JoinNow = () => {
	const [showForm, setShowForm] = useState(true)
	const showFormToggler = () => {
		setShowForm(!showForm)
	}
	return (
		<div className='centerAlign'>
			<div className='joinForm'>
				{showForm && (
					<>
						<div class='mb-3'>
							<Link to='/' class='navbar-brand'>
								<AnimatedLogo />
								<img src={Logo} alt='' />
								Login
							</Link>
						</div>
						<div class='form-text mb-3'>Provide correct email and password to login.</div>
						<form>
							<div class='mb-3'>
								<label class='form-label'>Email address</label>
								<input type='email' class='form-control' />
							</div>
							<div class='mb-3'>
								<label class='form-label'>Password</label>
								<input type='password' class='form-control' />
							</div>
							<div class='mb-3 form-check'>
								<input type='checkbox' class='form-check-input' />
								<label class='form-check-label'>Remember Me</label>
							</div>
							<button type='submit' class='btn btn-success'>
								Login Now
							</button>
							<button className='btn ms-3' onClick={showFormToggler}>
								SignUp?
							</button>
						</form>
					</>
				)}
				{!showForm && (
					<>
						<div class='mb-3'>
							<Link to='/' class='navbar-brand'>
								<AnimatedLogo />
								<img src={Logo} alt='' />
								SignUp
							</Link>
						</div>
						<div class='form-text mb-3'>Provide valid email and password to signup.</div>
						<form>
							<div class='mb-3'>
								<label class='form-label'>Full Name</label>
								<input type='text' class='form-control' />
							</div>
							<div class='mb-3'>
								<label class='form-label'>Email address</label>
								<input type='email' class='form-control' />
							</div>
							<div class='mb-3'>
								<label class='form-label'>Password</label>
								<input type='password' class='form-control' />
							</div>
							<div class='mb-3'>
								<label class='form-label'>Retype Password</label>
								<input type='password' class='form-control' />
							</div>
							<div class='mb-3 form-check'>
								<input type='checkbox' class='form-check-input' />
								<label class='form-check-label'>I accept QuizSystem's terms and conditions.</label>
							</div>
							<button type='submit' class='btn btn-success'>
								Create Account
							</button>
							<button className='btn ms-3' onClick={showFormToggler}>
								Login?
							</button>
						</form>
					</>
				)}
			</div>
		</div>
	)
}

export default JoinNow
