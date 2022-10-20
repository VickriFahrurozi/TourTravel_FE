/** @format */
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { logo, loginimage } from '../../components/asset/asset';
import { AuthRegister } from '../../redux/actions/Auth';
const register = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const [RegisterData, setRegisterData] = useState({
		name: '',
		email: '',
		phone_number: '',
		address: '',
		password: '',
		confirmpassword: '',
	});
	const data = useSelector((state) => state.auth);
	const handleregister = async (e) => {
		e.preventDefault();
		dispatch(AuthRegister(RegisterData));
	};
	useEffect(() => {
		if ((data.isLogin == true) & (data.data.role == 'user')) {
			router.replace(`/`);
		} else if (data.isLogin == true && data.data.role == 'superuser') {
			router.replace(`/SuperUser/Superuser`);
		} else if (data.isLogin == true && data.data.role == 'admin') {
			router.replace(`/Admin/HomeAdmin`);
		}
	}, [data.isLogin]);
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
										Register
									</div>
								</div>
							</div>
							<form action='' method='post' id='cusCreate' autocomplete='off'>
								<div className='login-field  justify-content-center'>
									<div>
										<div className='login-text font-style-responsive'>
											Name :
										</div>
										<input
											className='login-text-input col-12'
											type='text'
											required
											placeholder='Enter Your Name'
											onChange={(e) => {
												setRegisterData((prevState) => ({
													...prevState,
													name: e.target.value,
												}));
											}}
										/>
									</div>

									<div>
										<div className='login-text login-text-password font-style-responsive'>
											Email Address :
										</div>
										<input
											className='login-text-input col-12'
											type='Email'
											required
											placeholder='Enter Your Email Address'
											onChange={(e) => {
												setRegisterData((prevState) => ({
													...prevState,
													email: e.target.value,
												}));
											}}
										/>
									</div>
									<div>
										<div className='login-text login-text-password font-style-responsive'>
											Phone Number
										</div>
										<input
											className='login-text-input col-12'
											type='tel'
											required
											placeholder='Enter Your Email Address'
											onChange={(e) => {
												setRegisterData((prevState) => ({
													...prevState,
													phone_number: e.target.value,
												}));
											}}
										/>
									</div>
									<div>
										<div className='login-text login-text-password font-style-responsive'>
											Address
										</div>
										<input
											className='login-text-input col-12'
											type='text'
											required
											placeholder='Enter Your Email Address'
											onChange={(e) => {
												setRegisterData((prevState) => ({
													...prevState,
													address: e.target.value,
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
												setRegisterData((prevState) => ({
													...prevState,
													password: e.target.value,
												}));
											}}
										/>
									</div>
									<div>
										<div className='login-text login-text-password font-style-responsive'>
											Confirm Password :
										</div>
										<input
											className='login-text-input col-12'
											type='password'
											required
											placeholder='Enter Your Password'
											onChange={(e) => {
												setRegisterData((prevState) => ({
													...prevState,
													confirmpassword: e.target.value,
												}));
											}}
										/>
									</div>
								</div>

								<div className='row login-button col-md-10 justify-content-center'>
									<button
										className='btn btn-success  mb-4 login-basic col-md-10 col-sm-8 shadow-lg text-white'
										onClick={(e) => {
											handleregister(e);
										}}
									>
										<input
											className='bg-success text-white submit-button'
											type='submit'
											value='Register'
										/>
									</button>
								</div>
							</form>

							<div className='row login-button col-md-10 login-button-sign-up justify-content-center'>
								<div className='login-dont-have-account mb-4 font-style-responsive'>
									Already Have an Account ?
								</div>
								<Link href='/Auth/login'>
									<button className='btn btn-outline-success mb-4 login-sign-up login-basic col-md-10 col-sm-8  shadow-lg  '>
										Login Here
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
export default register;
