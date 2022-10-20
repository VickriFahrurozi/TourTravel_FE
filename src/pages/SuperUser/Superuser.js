/** @format */
import { NavbarSuperUser } from '../../components/navbar';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../../components/footer';
import { useState, useEffect } from 'react';
import { GetAllPackage } from '../../redux/actions/Package';
import { useRouter } from 'next/router';
import {
	AddPackage,
	DeletePackage,
	EditPackage,
} from '../../redux/actions/Package';
import Swal from 'sweetalert2';
const HomeSuperUser = (data) => {
	const router = useRouter();
	const dispatch = useDispatch();
	const datapackage = useSelector((state) => state.getallpackage);
	const datalogin = useSelector((state) => state.auth);
	const [Refetch, setRefefetch] = useState(false);
	let totalpage = Array(data.data.totalpage).fill();
	const [FormAddData, setFormAddData] = useState({
		package_name: '',
		package_image: '',
		package_description: '',
		package_price: '',
		package_date: '',
	});
	const [package_id, setpackage_id] = useState();
	const formdata = new FormData();
	formdata.append('package_name', FormAddData.package_name);
	formdata.append('package_image', FormAddData.package_image);
	formdata.append('package_description', FormAddData.package_description);
	formdata.append('package_price', FormAddData.package_price);
	formdata.append('package_date', FormAddData.package_date);
	const [paginate, setpaginate] = useState({
		page: 1,
		limit: 4,
		order_by: 'package_price',
		sort: 'ASC',
		pagination: false,
	});
	const handleAddPackage = async (e) => {
		e.preventDefault();
		dispatch(AddPackage(formdata, datalogin.data.token));
		setRefefetch(!Refetch);
	};
	const handleEditPackage = async (e) => {
		e.preventDefault();
		dispatch(EditPackage(formdata, datalogin.data.token, package_id));
		setRefefetch(!Refetch);
	};
	const handlePaginate = (page) => {
		setpaginate((prevData) => ({
			...prevData,

			page: page,
			pagination: true,
		}));
		dispatch(GetAllPackage(paginate, page));
	};
	useEffect(() => {}, [Refetch]);
	return (
		<>
			<NavbarSuperUser />
			<div className='container-fluid row container-fluid-package'>
				<div className='col-12'>
					<div className='col-12 packageword d-flex justify-content-center text-success'>
						PACKAGE LIST
					</div>
					<div>
						<button
							className='col-4 btn btn-success p-3 pt-4 pb-4 mb-5'
							data-bs-toggle='modal'
							data-bs-target='#AddNewPackage'
						>
							Add Package
						</button>
					</div>
					<div className='col-12 d-flex flex-wrap justify-content-between '>
						{paginate.pagination == false ? (
							<>
								{data.data.result.map((item, index) => {
									return (
										<>
											<div className='col-12 col-xl-5 card  p-5  package mb-5'>
												<div className='col d-flex justify-content-center highlight-word mt-4 mb-4'>
													{item.package_name}
												</div>
												<Image
													className=''
													src={`http://localhost:7777/upload/${item.package_image}`}
													width={'500'}
													height={'500'}
												/>
												<div className='col d-flex justify-content-center highlight-word mt-4 mb-4'>
													IDR {item.package_price}/PAX
												</div>
												<div className='col d-flex justify-content-between'>
													<button
														className='btn btn-outline-danger col-5 d-flex justify-content-center highlight-word'
														onClick={() => {
															Swal.fire({
																title: 'Do you want to save the changes?',
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
																	// Swal.fire('Saved!', '', 'success');
																	dispatch(
																		DeletePackage(
																			item.package_id,
																			datalogin.data.token
																		)
																	);
																} else if (result.isDenied) {
																	Swal.fire('Canceled', '', 'info');
																}
															});
														}}
													>
														Delete
													</button>
													<button
														className='btn btn-outline-primary col-5 d-flex justify-content-center highlight-word'
														data-bs-toggle='modal'
														data-bs-target='#UpdatePackage'
														onClick={() => {
															setFormAddData((prevState) => ({
																...prevState,
																package_name: item.package_name,
																package_image: item.package_image,
																package_description: item.package_description,
																package_date: item.package_date.slice(0, 10),
																package_price: item.package_price,
															}));
															setpackage_id(item.package_id);
														}}
													>
														Edit
													</button>
												</div>
											</div>
											;
										</>
									);
								})}
							</>
						) : (
							<>
								{datapackage.data.result.map((item, index) => {
									return (
										<>
											<div className='col-12 col-xl-5 card  p-5  package mb-5'>
												<div className='col d-flex justify-content-center highlight-word mt-4 mb-4'>
													{item.package_name}
												</div>
												<Image
													className=''
													src={`http://localhost:7777/upload/${item.package_image}`}
													width={'500'}
													height={'500'}
												/>
												<div className='col d-flex justify-content-center highlight-word mt-4 mb-4'>
													IDR {item.package_price}/PAX
												</div>
												<div className='col d-flex justify-content-between'>
													<button
														className='btn btn-outline-danger col-5 d-flex justify-content-center highlight-word'
														onClick={() => {
															Swal.fire({
																title: 'Do you want to save the changes?',
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
																	// Swal.fire('Saved!', '', 'success');
																	dispatch(
																		DeletePackage(
																			item.package_id,
																			datalogin.data.token
																		)
																	);
																} else if (result.isDenied) {
																	Swal.fire('Canceled', '', 'info');
																}
															});
														}}
													>
														Delete
													</button>
													<button
														className='btn btn-outline-primary col-5 d-flex justify-content-center highlight-word'
														onClick={() => {
															setFormAddData((prevState) => ({
																...prevState,
																package_name: item.package_name,
																package_image: item.package_image,
																package_description: item.package_description,
																package_date: item.package_date.slice(0, 10),
																package_price: item.package_price,
															}));
															setpackage_id(item.package_id);
														}}
													>
														Edit
													</button>
												</div>
											</div>
											;
										</>
									);
								})}
							</>
						)}
					</div>
					{totalpage.map((item, index) => {
						return (
							<>
								<button
									className={
										index + 1 == paginate.page
											? 'btn btn-success m-4'
											: 'btn btn-outline-success m-4'
									}
									onClick={() => {
										handlePaginate(index + 1);
									}}
								>
									{index + 1}
								</button>
							</>
						);
					})}
				</div>
			</div>
			<Footer />
			<div
				class='modal fade'
				id='UpdatePackage'
				tabindex='-1'
				aria-labelledby='AddNewMovieLabel'
				aria-hidden='true'
			>
				<div class='modal-dialog'>
					<div class='modal-content'>
						<div class='modal-header'>
							<h5 class='modal-title' id='AddNewMovieLabel'>
								Update
							</h5>
							<button
								type='button'
								class='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
							></button>
						</div>
						<form
							action='/action_page_binary.asp'
							method='post'
							enctype='multipart/form-data'
							onSubmit={(e) => handleAddPackage(e)}
						>
							<div class='modal-body'>
								<div class='mb-3'>
									<label for='exampleInputEmail1' class='form-label'>
										Package Name
									</label>
									<input
										type='text'
										class='form-control'
										id='exampleInputEmail1'
										defaultValue={FormAddData.package_name}
										onChange={(e) => {
											setFormAddData((prevState) => ({
												...prevState,
												package_name: e.target.value,
											}));
										}}
									/>
								</div>
								<div class='mb-3'>
									<label for='customFile' class='form-label'>
										Image
									</label>
									<input
										type='file'
										class='form-control-file'
										id='customFile'
										name='uploaded_file'
										defaultValue={FormAddData.package_image}
										onChange={(e) => {
											setFormAddData((prevState) => ({
												...prevState,
												package_image: e.target.files[0],
											}));
										}}
									/>
								</div>

								<div class='mb-3'>
									<label for='exampleInputEmail1' class='form-label'>
										Description
									</label>
									<input
										type='email'
										class='form-control'
										id='exampleInputEmail1'
										defaultValue={FormAddData.package_description}
										onChange={(e) => {
											setFormAddData((prevState) => ({
												...prevState,
												package_description: e.target.value,
											}));
										}}
									/>
								</div>

								<div class='mb-3'>
									<label for='exampleInputEmail1' class='form-label'>
										Price
									</label>
									<input
										type='number'
										class='form-control'
										id='exampleInputEmail1'
										defaultValue={FormAddData.package_price}
										onChange={(e) => {
											setFormAddData((prevState) => ({
												...prevState,
												package_price: e.target.value,
											}));
										}}
									/>
								</div>

								<div class='mb-3'>
									<label for='exampleInputEmail1' class='form-label'>
										Date
									</label>
									<input
										type='date'
										class='form-control'
										id='exampleInputEmail1'
										defaultValue={FormAddData.package_date}
										onChange={(e) => {
											setFormAddData((prevState) => ({
												...prevState,
												package_date: e.target.value,
											}));
										}}
									/>
								</div>

								<div class='modal-footer'>
									<button
										type='button'
										class='btn btn-outline-success'
										data-bs-dismiss='modal'
									>
										Cancel
									</button>
									<button
										type='button'
										class='btn btn-success'
										onClick={(e) => {
											handleEditPackage(e);
										}}
									>
										Edit
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div
				class='modal fade'
				id='AddNewPackage'
				tabindex='-1'
				aria-labelledby='AddNewMovieLabel'
				aria-hidden='true'
			>
				<div class='modal-dialog'>
					<div class='modal-content'>
						<div class='modal-header'>
							<h5 class='modal-title' id='AddNewMovieLabel'>
								Add Package
							</h5>
							<button
								type='button'
								class='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
							></button>
						</div>
						<form
							action='/action_page_binary.asp'
							method='post'
							enctype='multipart/form-data'
							onSubmit={(e) => handleAddPackage(e)}
						>
							<div class='modal-body'>
								<div class='mb-3'>
									<label for='exampleInputEmail1' class='form-label'>
										Package Name
									</label>
									<input
										type='text'
										class='form-control'
										id='exampleInputEmail1'
										onChange={(e) => {
											setFormAddData((prevState) => ({
												...prevState,
												package_name: e.target.value,
											}));
										}}
									/>
								</div>
								<div class='mb-3'>
									<label for='customFile' class='form-label'>
										Image
									</label>
									<input
										type='file'
										class='form-control-file'
										id='customFile'
										name='uploaded_file'
										onChange={(e) => {
											setFormAddData((prevState) => ({
												...prevState,
												package_image: e.target.files[0],
											}));
										}}
									/>
								</div>

								<div class='mb-3'>
									<label for='exampleInputEmail1' class='form-label'>
										Description
									</label>
									<input
										type='email'
										class='form-control'
										id='exampleInputEmail1'
										onChange={(e) => {
											setFormAddData((prevState) => ({
												...prevState,
												package_description: e.target.value,
											}));
										}}
									/>
								</div>

								<div class='mb-3'>
									<label for='exampleInputEmail1' class='form-label'>
										Price
									</label>
									<input
										type='number'
										class='form-control'
										id='exampleInputEmail1'
										onChange={(e) => {
											setFormAddData((prevState) => ({
												...prevState,
												package_price: e.target.value,
											}));
										}}
									/>
								</div>

								<div class='mb-3'>
									<label for='exampleInputEmail1' class='form-label'>
										Date
									</label>
									<input
										type='date'
										class='form-control'
										id='exampleInputEmail1'
										onChange={(e) => {
											setFormAddData((prevState) => ({
												...prevState,
												package_date: e.target.value,
											}));
										}}
									/>
								</div>

								<div class='modal-footer'>
									<button
										type='button'
										class='btn btn-outline-success'
										data-bs-dismiss='modal'
									>
										Cancel
									</button>
									<button
										type='button'
										class='btn btn-success'
										onClick={(e) => {
											handleAddPackage(e);
										}}
									>
										Add
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
export default HomeSuperUser;

export async function getServerSideProps() {
	// const dataauth = useSelector((indexreducer) => indexreducer.auth);
	const res = await fetch(
		`http://localhost:7777/api/v1/package?limit=4&page=1&order_by=package_price&sort=ASC`
	);
	const data = await res.json();
	return { props: { data } };
}
