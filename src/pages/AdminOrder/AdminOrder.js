/** @format */

import { NavbarSuperUser } from '../../components/navbar';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../../components/footer';
import { useState, useEffect } from 'react';
import { GetAllOrder } from '../../redux/actions/Oder';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import { DeleteOrder, UpdateOrder } from '../../redux/actions/Oder';
const AdminOrder = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const datalogin = useSelector((state) => state.auth);
	const dataorder = useSelector((state) => state.getallorder);
	const [Refetch, setRefefetch] = useState();
	const [Status, setStatus] = useState({
		rejected: 'rejected',
		confirmed: 'confirmed',
	});
	console.log(dataorder.data.result, 'ini data ordernya');

	const [paginate, setpaginate] = useState({
		page: 1,
		limit: 10,
		order_by: 'order_status',
		sort: 'ASC',
		pagination: false,
	});
	useEffect(() => {
		if (datalogin.isLogin == false || datalogin.data.role == 'user') {
			router.replace(`/Auth/login`);
		} else {
			dispatch(GetAllOrder(paginate, datalogin.data.token));
		}
	}, [Refetch]);
	return (
		<>
			<NavbarSuperUser />

			<table class='table table-striped'>
				<thead className='thead-light'>
					<tr>
						<th scope='col'>No</th>
						<th scope='col'>Order Number</th>
						<th scope='col'>Date</th>
						<th scope='col'>Customer Id</th>
						<th scope='col'>Package Id</th>
						<th scope='col'>Quantity</th>
						<th scope='col'>Total Price</th>
						<th scope='col'>Status </th>
					</tr>
				</thead>
				<tbody>
					{dataorder.data.result.map((item, index) => {
						return (
							<>
								<tr>
									<th className='col d-flex justify-content-center' scope='row'>
										{index + 1}
									</th>
									<td>{item.order_number}</td>
									<td>{item.created_at.slice(0, 10)}</td>
									<td>{item.customer_id}</td>
									<td>{item.package_id}</td>
									<td>{item.quantity}</td>
									<td>{item.total_price}</td>
									{item.order_status == 'waiting' ? (
										<>
											<td>
												<div className='d-flex justify-content-center'>
													<button
														className='btn btn-outline-success me-2'
														onClick={() => {
															Swal.fire({
																title: 'Do you want to Reject This Order?',
																showDenyButton: true,

																confirmButtonText: 'Yes',
																denyButtonText: 'No',
																customClass: {
																	actions: 'my-actions',
																	confirmButton: 'order-1',
																	denyButton: 'order-2',
																},
															}).then((result) => {
																if (result.isConfirmed) {
																	Swal.fire('Saved!', '', 'success');
																	dispatch(
																		UpdateOrder(
																			item.order_id,
																			Status.rejected,
																			datalogin.data.token
																		)
																	);
																	setRefefetch(!Refetch);
																} else if (result.isDenied) {
																	Swal.fire('Canceled', '', 'info');
																}
															});
														}}
													>
														Reject
													</button>
													<button
														className='btn btn-success ms-2'
														onClick={() => {
															Swal.fire({
																title: 'Do you want to Reject This Order?',
																showDenyButton: true,

																confirmButtonText: 'Yes',
																denyButtonText: 'No',
																customClass: {
																	actions: 'my-actions',
																	confirmButton: 'order-1',
																	denyButton: 'order-2',
																},
															}).then((result) => {
																if (result.isConfirmed) {
																	Swal.fire('Saved!', '', 'success');
																	dispatch(
																		UpdateOrder(
																			item.order_id,
																			Status.confirmed,
																			datalogin.data.token
																		)
																	);
																	setRefefetch(!Refetch);
																} else if (result.isDenied) {
																	Swal.fire('Canceled', '', 'info');
																}
															});
														}}
													>
														Accept
													</button>
												</div>
											</td>
										</>
									) : (
										<>
											<td>{item.order_status}</td>
										</>
									)}
									<td>
										<div className='col d-flex justify-content-center'>
											<button
												className='btn btn-danger'
												onClick={() => {
													Swal.fire({
														title: 'Do you want to Delete This Order?',
														showDenyButton: true,

														confirmButtonText: 'Yes',
														denyButtonText: 'No',
														customClass: {
															actions: 'my-actions',
															confirmButton: 'order-1',
															denyButton: 'order-2',
														},
													}).then((result) => {
														if (result.isConfirmed) {
															Swal.fire('Saved!', '', 'success');
															dispatch(
																DeleteOrder(item.order_id, datalogin.data.token)
															);
															setRefefetch(!Refetch);
														} else if (result.isDenied) {
															Swal.fire('Canceled', '', 'info');
														}
													});
												}}
											>
												Delete
											</button>
										</div>
									</td>
								</tr>
							</>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default AdminOrder;
