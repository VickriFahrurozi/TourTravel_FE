/** @format */
import { NavbarUser } from '../../components/navbar';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Footer from '../../components/footer';
import Image from 'next/image';
import { AddOrder } from '../../redux/actions/Oder';

const Order = (datapackage) => {
	const data = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const [dataorder, setdataorder] = useState({
		customer_id: data.data.id,
		package_id: datapackage.data.result[0].package_id,
		quantity: 1,
		price: datapackage.data.result[0].package_price,
		token: data.data.token,
	});
	const router = useRouter();
	useEffect(() => {
		if (data.isLogin == false) {
			router.replace(`/Auth/login`);
		}
	}, [data]);
	return (
		<>
			<NavbarUser />
			<div className='container-fluid row'>
				<div className='col'>
					<div className='p-5'>
						<div className='col-12 d-flex justify-content-center'>
							<Image
								className=''
								src={`http://localhost:7777/upload/${datapackage.data.result[0].package_image}`}
								width={'700'}
								height={'600'}
							/>
						</div>
						<div className='col-12 d-flex justify-content-center product-detail-name whyus'>
							{datapackage.data.result[0].package_name}
						</div>
						<div className='col-12 d-flex justify-content-center product-detail-price whyus-word'>
							IDR {datapackage.data.result[0].package_price}/PAX
						</div>
					</div>

					<div className='col-12 package-description d-flex'>
						<div className='col-2'></div>
						<div className='col-8 '>
							{datapackage.data.result[0].package_description}
						</div>
						<div className='col-2'></div>
					</div>
					<div className=' d-flex justify-content-center col-12 mt-5'>
						<div className='col'></div>
						<div className=' col-8 d-flex justify-content-center flex-wrap '>
							<div className='col-4 d-flex  checkout-word flex-wrap'>
								<div>Total Price = </div>
								<div className='ms-3'>
									{' '}
									{dataorder.quantity * dataorder.price}
								</div>
							</div>
							<div className='col d-flex justify-content-center'>
								<div className='col d-flex justify-content-center'>
									<button
										className='btn btn-outline-success '
										onClick={() => {
											{
												dataorder.quantity != 1 ? (
													<>
														{setdataorder((prevData) => ({
															...prevData,
															quantity: dataorder.quantity - 1,
														}))}
													</>
												) : (
													<></>
												);
											}
										}}
									>
										-{' '}
									</button>
									<div className='me-3 ms-3 d-flex align-items-center'>
										{dataorder.quantity}
									</div>
									<button
										className='btn btn-outline-success '
										onClick={() => {
											setdataorder((prevData) => ({
												...prevData,
												quantity: dataorder.quantity + 1,
											}));
										}}
									>
										+
									</button>
								</div>
								<div className='col d-flex justify-content-center '>
									<button
										className='btn btn-success checkout-button'
										onClick={() => {
											dispatch(AddOrder(dataorder));
											console.log(dataorder, 'set data order');
										}}
									>
										CheckOut
									</button>
								</div>
							</div>
						</div>
						<div className='col'></div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Order;

export async function getServerSideProps(context) {
	console.log(context.params, 'ini context nya');
	// const dataauth = useSelector((indexreducer) => indexreducer.auth);
	const res = await fetch(
		`http://localhost:7777/api/v1/package/id?package_id=${context.params.Order}`
	);
	const data = await res.json();
	return { props: { data } };
}
