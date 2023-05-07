import Link from 'next/link'
import Logo from 'assets/logoText.svg'
import AnimatedLogo from 'components/AnimatedLogo'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginFormSchema } from 'schemas/user.schema'

const Login = ({ toggler }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(loginFormSchema),
	})

	const onSubmit = async values => {
		console.log('login successful', values)
	}

	return (
		<div className='joinForm'>
			<div className='mb-3'>
				<Link href='/' className='navbar-brand'>
					<AnimatedLogo />
					<Image src={Logo} alt='' />
					Login
				</Link>
			</div>
			<div className='form-text mb-3'>Provide correct email and password to login.</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='form-block mb-3'>
					<label className='form-label'>Email address</label>
					<input
						type='email'
						className='form-control'
						placeholder='user@example.com'
						{...register('email')}
						aria-invalid={errors.email ? 'true' : 'false'}
					/>
					{errors.email && <span>{errors.email.message}</span>}
				</div>
				<div className='form-block mb-3'>
					<label className='form-label'>Password</label>
					<input
						type='password'
						className='form-control'
						placeholder='••••••••••••••••'
						{...register('password')}
						aria-invalid={errors.password ? 'true' : 'false'}
					/>
					{errors.password && <span>{errors.password.message}</span>}
				</div>
				<div className='mb-3 form-check'>
					<input type='checkbox' className='form-check-input' />
					<label className='form-check-label'>Remember Me</label>
				</div>
				<button type='submit' className='btn btn-success me-3'>
					Login Now
				</button>
				<button className='btn' onClick={toggler}>
					SignUp?
				</button>
			</form>
		</div>
	)
}

export default Login
