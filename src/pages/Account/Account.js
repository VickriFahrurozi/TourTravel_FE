/** @format */

import { NavbarSuperUser } from '../../components/navbar';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../../components/footer';
import { useState, useEffect } from 'react';
import { GetAllAccount } from '../../redux/actions/Account';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import { DeleteAccount } from '../../redux/actions/Account';

const Account = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const datalogin = useSelector((state) => state.auth);
	const dataaccount = useSelector((state) => state.getallaccount);
	const [Refetch, setRefefetch] = useState();

	console.log(dataaccount.data.result, 'ini data ordernya loh');

	const [paginate, setpaginate] = useState({
		page: 1,
		limit: 100,
		order_by: 'account_id',
		sort: 'ASC',
		pagination: false,
	});
	useEffect(() => {
		if (datalogin.isLogin == false || datalogin.data.role == 'user') {
			router.replace(`/Auth/login`);
		} else {
			dispatch(GetAllAccount(paginate, datalogin.data.token));
		}
	}, [Refetch]);
	return (
		<>
			<NavbarSuperUser />

			<table class='table table-striped'>
				<thead className='thead-light'>
					<tr>
						<th scope='col'>No</th>
						<th scope='col'>ID</th>
						<th scope='col'>Role</th>
						<th scope='col'>Name</th>
						<th scope='col'>Email</th>
						<th scope='col'>Phone</th>
						<th scope='col'>Address</th>
					</tr>
				</thead>
				<tbody>
					{dataaccount.data.result.map((item, index) => {
						return (
							<>
								<tr>
									<th className='col d-flex justify-content-center' scope='row'>
										{index + 1}
									</th>
									<td>{item.account_id}</td>
									<td>{item.account_role}</td>
									<td>{item.customer_name}</td>
									<td>{item.account_email}</td>
									<td>{item.customer_phone_number}</td>
									<td>{item.customer_address}</td>

									<td>
										<div className='col d-flex justify-content-center'>
											<button
												className='btn btn-danger'
												onClick={() => {
													Swal.fire({
														title: 'Do you want to Delete This Account?',
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
															Swal.fire('Success', '', 'success');
															dispatch(
																DeleteAccount(
																	item.account_id,
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

export default Account;
