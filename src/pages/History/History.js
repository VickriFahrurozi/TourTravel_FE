/** @format */
import { NavbarUser } from '../../components/navbar';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../../components/footer';
import { useRouter } from 'next/router';
import { GetSingleOrder } from '../../redux/actions/Oder';
const History = () => {
	const router = useRouter();
	const data = useSelector((state) => state.auth);
	const dataorder = useSelector((state) => state.getsingleorder);
	console.log(dataorder.data.success, 'ini data ordernya');
	const dispatch = useDispatch();
	useEffect(() => {
		if (data.isLogin == false) {
			router.replace(`/Auth/login`);
		} else {
			dispatch(GetSingleOrder(data.data.id, data.data.token));
		}
	}, [data]);
	return (
		<>
			<NavbarUser />

			<div className='container-fluid row container-fluid-package'>
				<div className='col-12'>
					{dataorder.data.success == true ? (
						<>
							<div className='col-12 history-main-word d-flex justify-content-center text-success'>
								Your Orders History
							</div>

							<div className='col-12 d-flex flex-wrap justify-content-between '>
								{dataorder.data.result.map((item, index) => {
									return (
										<>
											<div className='col-12 d-flex card  p-5  package mb-5 '>
												<div className='col d-flex flex-wrap '>
													<div className='col-md-3 col-12  d-flex justify-content-center '>
														<Image
															className='image-history '
															src={`http://localhost:7777/upload/${item.package_image}`}
															width={300}
															height={300}
														/>
													</div>
													<div className='col  justify-content-center '>
														<div className='col d-flex justify-content-center history-word mt-4 mb-4'>
															{item.package_name}
														</div>
														<div className='col d-flex history-sub-word'>
															<div className='col-lg-4 col-6 d-flex justify-content-start ps-5'>
																Order Date
															</div>
															<div className='col d-flex justify-content-start'>
																: {item.created_at.slice(0, 10)}
															</div>
														</div>
														<div className='col d-flex history-sub-word'>
															<div className='col-lg-4 col-6 d-flex justify-content-start ps-5'>
																Quantity
															</div>
															<div className='col d-flex justify-content-start'>
																: {item.quantity}
															</div>
														</div>
														<div className='col d-flex history-sub-word'>
															<div className='col-lg-4 col-6 d-flex justify-content-start ps-5'>
																Total Price
															</div>
															<div className='col d-flex justify-content-start'>
																: {item.total_price}
															</div>
														</div>
														<div className='col d-flex history-sub-word'>
															<div className='col-lg-4 col-6 d-flex justify-content-start ps-5'>
																Order Status
															</div>
															<div className='col d-flex justify-content-start'>
																: {item.order_status}
															</div>
														</div>
													</div>
												</div>
											</div>
											;
										</>
									);
								})}
							</div>
						</>
					) : (
						<>
							<div className='col-12 history-main-word d-flex justify-content-center text-success'>
								NO HISTORY FOUND
							</div>
						</>
					)}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default History;
