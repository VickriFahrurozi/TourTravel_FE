/** @format */

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { AuthLogin } from '../../redux/actions/Auth';
import { logo, loginimage } from '../../components/asset/asset';
import Swal from 'sweetalert2';

const login = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const [LoginData, setLoginData] = useState({
		email: '',
		password: '',
	});
	const data = useSelector((state) => state.auth);
	console.log(data.data.role, 'ini datanya');

	const handlelogin = async (e) => {
		e.preventDefault();
		dispatch(AuthLogin(LoginData));
	};

	useEffect(() => {
		if ((data.isLogin == true) & (data.data.role == 'user')) {
			router.replace(`/`);
		} else if (data.isLogin == true && data.data.role == 'superuser') {
			router.replace(`/SuperUser/Superuser`);
		} else if (data.isLogin == true && data.data.role == 'admin') {
			router.replace(`/Admin/HomeAdmin`);
		}
	}, [data]);
	return (
		<>
			<div className='container-fluid login-container-fluid '>
				<div className='row'>
					<div className='col d-flex login-content-left  flex-row-reverse login-content-left-a '>
						<Image
							className='img-fluid image-cover-login '
							src={loginimage}
							width={'1100'}
						/>
					</div>
					<div className='col-sm-12 col-md-6 d-flex card login-card ps-4 '>
						<div className='login-content-right '>
							<div className='login-top-word  justify-content-center'>
								<div className='d-flex justify-content-center login-coffe-shop-word-responsive'>
									<Image src={logo} />
								</div>
								<div>
									<div className='whyus d-flex justify-content-center'>
										Login
									</div>
								</div>
							</div>
							<form action='' method='post' id='cusCreate' autocomplete='off'>
								<div className='login-field  justify-content-center'>
									<div>
										<div className='login-text font-style-responsive'>
											Email Address :
										</div>
										<input
											className='login-text-input col-12'
											type='email'
											required
											placeholder='Enter Your Email Address'
											onChange={(e) => {
												setLoginData((prevState) => ({
													...prevState,
													email: e.target.value,
												}));
											}}
										/>
									</div>
									<div>
										<div className='login-text login-text-password font-style-responsive'>
											Password :
										</div>
										<input
											className='login-text-input col-12'
											type='password'
											required
											placeholder='Enter Your Password'
											onChange={(e) => {
												setLoginData((prevState) => ({
													...prevState,
													password: e.target.value,
												}));
											}}
										/>
									</div>
									<div>
										<div className='login-text login-forgot-password font-style-responsive text-dark'>
											Forgot Password ?
										</div>
									</div>
								</div>
								<div className='row login-button col-md-10 justify-content-center'>
									<button
										className='btn btn-success  mb-4 login-basic col-md-10 col-sm-8 shadow-lg text-white'
										onClick={(e) => {
											handlelogin(e);
										}}
									>
										<input
											className='bg-success text-white submit-button'
											type='submit'
											value='Login'
										/>
									</button>
								</div>
							</form>

							<div className='row login-button col-md-10 login-button-sign-up justify-content-center'>
								<div className='login-dont-have-account mb-4 font-style-responsive'>
									Don't Have an Account ?
								</div>
								<Link href='/Auth/register'>
									<button className='btn btn-outline-success mb-4 login-sign-up login-basic col-md-10 col-sm-8  shadow-lg  '>
										Sign Up Here
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default login;
