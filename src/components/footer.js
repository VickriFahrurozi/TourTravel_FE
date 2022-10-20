/** @format */
import Image from 'next/image';

const Footer = () => {
	return (
		<>
			<div className='col-12 d-flex ps-5 pe-5 pt-5 mt-5 bg-success'>
				<div className='col-6 '>
					<div className='d-flex align-items-center '>
						{/* <Image src={coffeelogo} /> */}
						<div className='ms-3 login-coffe-shop-word navbar-brand-word text-white'>
							{' '}
							Tour & Travel
						</div>
					</div>
					<div className='mt-4  footer-word text-white'>
						<div class='alert ' role='alert'>
							<h4 class='alert-heading'>Jasa Tour Terbaik</h4>
							<p>Pilihan Package Banyak</p>

							<p class='mb-0'>Harga Terjangkau</p>
						</div>
					</div>
					<div className='d-flex mt-4 '>
						<div>
							{/* <Image className='footer-3-logo' src={facebook} /> */}
						</div>
						<div className='footer-logo footer-logo-twitter'>
							{/* <Image src={twitter} /> */}
						</div>
						<div>
							{/* <Image className='footer-3-logo' src={instagram} /> */}
						</div>
					</div>

					<div>
						<text className='copyright text-white'>© 2020 copyright</text>
					</div>
				</div>
				<div className='col-6  pb-5 footer-right-content d-flex text-white'>
					<div className='col-6'>
						<div className=' footer-word-right'>Package</div>
						<div className=' row footer-sub-word'>
							<div className='mt-3'>View Package</div>
						</div>
					</div>
					<div className='col-6'>
						<div className=' footer-word-right'>Daftar</div>
						<div className=' row footer-sub-word'>
							<div className='mt-3'>Tour & Travel ?</div>
							<div className='mt-2 mb-2'>FAQ</div>
							<div>About Us</div>
							<div className='mt-3 mb-2'>Privacy Policy</div>
							<div>Terms Of Service</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
