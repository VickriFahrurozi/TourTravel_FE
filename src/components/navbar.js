/** @format */

import Image from 'next/image';
import { logo } from './asset/asset';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AuthLogout } from '../redux/actions/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export const Navbar = () => {
	const router = useRouter();
	return (
		<>
			<nav className='navbar navbar-expand-md navbar-light bg-light '>
				<button
					className='navbar-toggler '
					type='button'
					data-toggle='collapse'
					data-target='#navbarTogglerDemo01'
					aria-controls='navbarTogglerDemo01'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='collapse navbar-collapse navbar-main   '
					id='navbarTogglerDemo01'
				>
					<div className='navbar-brand col-md-3  d-flex  flex-wrap  align-items-center justify-content-sm-center justify-content-md-start  '>
						<Image src={logo} width={'120%'} height={'120%'} />
						<div className='login-coffe-shop-word ms-2 navbar-brand-word  '>
							Tour & Travel
						</div>
					</div>
					<ul className='navbar-nav mr-auto mt-2 mt-lg-0 col-md-6 justify-content-around '>
						<Link href='/'>
							<li className='nav-item  active d-flex justify-content-center '>
								<a className='nav-link navbar-font  ' href='#'>
									Home <span className='sr-only'></span>
								</a>
							</li>
						</Link>
						<Link href='/UserPackage/UserPackage'>
							<li className='nav-item d-flex justify-content-center '>
								<a className='nav-link navbar-font' href='#'>
									Package
								</a>
							</li>
						</Link>
						{/* <li className='nav-item d-flex justify-content-center '>
							<a className='nav-link navbar-font ' href='#'>
								History
							</a>
						</li> */}
					</ul>
					<div className=' my-2 my-lg-0 col-md-3 d-flex justify-content-md-end justify-content-sm-center'>
						<Link href='/Auth/login'>
							<button
								className='btn btn-outline-success  my-2 my-sm-0 me-4 navbar-font-button  text-dark'
								type='submit'
							>
								Login
							</button>
						</Link>
						<Link href='/Auth/register'>
							<button
								className='btn btn-success my-2 my-sm-0 navbar-font-button '
								type='submit'
							>
								Sign Up
							</button>
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
};
export const NavbarUser = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	return (
		<>
			<nav className='navbar navbar-expand-md navbar-light bg-light '>
				<button
					className='navbar-toggler '
					type='button'
					data-toggle='collapse'
					data-target='#navbarTogglerDemo01'
					aria-controls='navbarTogglerDemo01'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='collapse navbar-collapse navbar-main   '
					id='navbarTogglerDemo01'
				>
					<div className='navbar-brand col-md-3  d-flex  flex-wrap  align-items-center justify-content-sm-center justify-content-md-start  '>
						<Image src={logo} width={'120%'} height={'120%'} />
						<div className='login-coffe-shop-word ms-2 navbar-brand-word  '>
							Tour & Travel
						</div>
					</div>
					<ul className='navbar-nav mr-auto mt-2 mt-lg-0 col-md-6 justify-content-around '>
						<Link href='/'>
							<li className='nav-item  active d-flex justify-content-center '>
								<a className='nav-link navbar-font  ' href='#'>
									Home <span className='sr-only'></span>
								</a>
							</li>
						</Link>
						<Link href='/UserPackage/UserPackage'>
							<li className='nav-item d-flex justify-content-center '>
								<a className='nav-link navbar-font' href='#'>
									Package
								</a>
							</li>
						</Link>
						<Link href='/History/History'>
							<li className='nav-item d-flex justify-content-center '>
								<a className='nav-link navbar-font' href='#'>
									History
								</a>
							</li>
						</Link>
					</ul>
					<div className=' my-2 my-lg-0 col-md-3 d-flex justify-content-md-end justify-content-sm-center '>
						<div className='d-flex align-items-center me-3 col-6 justify-content-end'>
							<h2>User</h2>
						</div>
						<div className='col-4'>
							<button
								className='btn btn-success my-2 my-sm-0 navbar-font-button pt-3 pb-3 '
								type='submit'
								onClick={() => {
									dispatch(AuthLogout());
									router.replace('/');
								}}
							>
								Logout
							</button>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};
export const NavbarSuperUser = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	return (
		<>
			<nav className='container-fluid navbar navbar-expand-md navbar-light bg-light '>
				<button
					className='navbar-toggler '
					type='button'
					data-toggle='collapse'
					data-target='#navbarTogglerDemo01'
					aria-controls='navbarTogglerDemo01'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='collapse navbar-collapse navbar-main   '
					id='navbarTogglerDemo01'
				>
					<div className='navbar-brand col-md-3  d-flex  flex-wrap  align-items-center justify-content-sm-center justify-content-md-start  '>
						<Image src={logo} width={'120%'} height={'120%'} />
						<div className='login-coffe-shop-word ms-2 navbar-brand-word  '>
							Tour & Travel
						</div>
					</div>
					<ul className='navbar-nav mr-auto mt-2 mt-lg-0 col-md-6 justify-content-around '>
						<Link href='/SuperUser/Superuser'>
							<li className='nav-item  active d-flex justify-content-center '>
								<a className='nav-link navbar-font  ' href='#'>
									Package <span className='sr-only'></span>
								</a>
							</li>
						</Link>
						<Link href='/Account/Account'>
							<li className='nav-item d-flex justify-content-center '>
								<a className='nav-link navbar-font' href='#'>
									Account
								</a>
							</li>
						</Link>
						<Link href='/AdminOrder/AdminOrder'>
							<li className='nav-item d-flex justify-content-center '>
								<a className='nav-link navbar-font' href='#'>
									Order
								</a>
							</li>
						</Link>
					</ul>
					<div className=' my-2 my-lg-0 col-md-3 d-flex justify-content-md-end justify-content-sm-center '>
						<div className='d-flex align-items-center me-3 col-6 justify-content-end'>
							<h2>SU</h2>
						</div>
						<div className='col'>
							<button
								className='btn btn-success my-2 my-sm-0 navbar-font-button pt-3 pb-3 ps-4 pe-4'
								type='submit'
								onClick={() => {
									dispatch(AuthLogout());
									router.replace('/');
								}}
							>
								Logout
							</button>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};
export const NavbarAdmin = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	return (
		<>
			<nav className='navbar navbar-expand-md navbar-light bg-light '>
				<button
					className='navbar-toggler '
					type='button'
					data-toggle='collapse'
					data-target='#navbarTogglerDemo01'
					aria-controls='navbarTogglerDemo01'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='collapse navbar-collapse navbar-main   '
					id='navbarTogglerDemo01'
				>
					<div className='navbar-brand col-md-3  d-flex  flex-wrap  align-items-center justify-content-sm-center justify-content-md-start  '>
						<Image src={logo} width={'120%'} height={'120%'} />
						<div className='login-coffe-shop-word ms-2 navbar-brand-word  '>
							Tour & Travel
						</div>
					</div>
					<ul className='navbar-nav mr-auto mt-2 mt-lg-0 col-md-6 justify-content-around '>
						<li className='nav-item  active d-flex justify-content-center '>
							<a className='nav-link navbar-font  ' href='#'>
								Package <span className='sr-only'></span>
							</a>
						</li>
						<li className='nav-item d-flex justify-content-center '>
							<a className='nav-link navbar-font' href='#'>
								Account
							</a>
						</li>
						<li className='nav-item d-flex justify-content-center '>
							<a className='nav-link navbar-font' href='#'>
								Order
							</a>
						</li>
						{/* <li className='nav-item d-flex justify-content-center '>
							<a className='nav-link navbar-font ' href='#'>
								History
							</a>
						</li> */}
					</ul>
					<div className=' my-2 my-lg-0 col-md-3 d-flex justify-content-md-end justify-content-sm-center '>
						<div className='d-flex align-items-center me-3 col-6 justify-content-end'>
							<h2>Admin</h2>
						</div>
						<div className='col-4'>
							<button
								className='btn btn-success my-2 my-sm-0 navbar-font-button pt-3 pb-3 ps-4 pe-4'
								type='submit'
								onClick={() => {
									dispatch(AuthLogout());
									router.replace('/');
								}}
							>
								Logout
							</button>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};
