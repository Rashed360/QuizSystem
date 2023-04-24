import Link from 'next/link'
import Logo from 'assets/logoText.svg'
import AnimatedLogo from 'components/AnimatedLogo'
import Image from 'next/image'

const Login = ({ toggler }) => {
	return (
		<div className='joinForm'>
			<div class='mb-3'>
				<Link href='/' class='navbar-brand'>
					<AnimatedLogo />
					<Image src={Logo} alt='' />
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
				<button className='btn ms-3' onClick={toggler}>
					SignUp?
				</button>
			</form>
		</div>
	)
}

export default Login
