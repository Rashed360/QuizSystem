import Link from 'next/link'
import Logo from 'assets/logoText.svg'
import AnimatedLogo from 'components/AnimatedLogo'
import Image from 'next/image'

const SignUp = ({ toggler }) => {
	return (
		<div className='joinForm'>
			<div class='mb-3'>
				<Link href='/' class='navbar-brand'>
					<AnimatedLogo />
					<Image src={Logo} alt='' />
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
				<button className='btn ms-3' onClick={toggler}>
					Login?
				</button>
			</form>
		</div>
	)
}

export default SignUp
