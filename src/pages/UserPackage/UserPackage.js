/** @format */
import { NavbarUser, Navbar } from '../../components/navbar';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../../components/footer';
import { useState, useEffect } from 'react';
import { GetAllPackage } from '../../redux/actions/Package';
import { useRouter } from 'next/router';
const UserPackage = (data) => {
	const router = useRouter();
	const dispatch = useDispatch();
	const datapackage = useSelector((state) => state.getallpackage);
	const datalogin = useSelector((state) => state.auth);

	let totalpage = Array(data.data.totalpage).fill();
	const [paginate, setpaginate] = useState({
		page: 1,
		limit: 4,
		order_by: 'package_price',
		sort: 'ASC',
		pagination: false,
	});

	const handlePaginate = (page) => {
		setpaginate((prevData) => ({
			...prevData,

			page: page,
			pagination: true,
		}));
		dispatch(GetAllPackage(paginate, page));
	};

	return (
		<>
			{(datalogin.isLogin == true) & (datalogin.data.role == 'user') ? (
				<NavbarUser />
			) : (
				<Navbar />
			)}
			<div className='container-fluid row container-fluid-package'>
				<div className='col-12'>
					<div className='col-12 packageword d-flex justify-content-center text-success'>
						OUR PACKAGE
					</div>
					<div></div>
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
												<div className='col d-flex justify-content-center'>
													<button
														className='btn btn-outline-success col-6 d-flex justify-content-center highlight-word'
														onClick={() => {
															router.push(`/Order/${item.package_id}`);
														}}
													>
														Order
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
												<div className='col d-flex justify-content-center'>
													<button
														className='btn btn-outline-success col-6 d-flex justify-content-center highlight-word'
														onClick={() => {
															router.push(`/Order/${item.package_id}`);
														}}
													>
														Order
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
		</>
	);
};
export default UserPackage;

export async function getServerSideProps() {
	// const dataauth = useSelector((indexreducer) => indexreducer.auth);
	const res = await fetch(
		`http://localhost:7777/api/v1/package?limit=4&page=1&order_by=package_price&sort=ASC`
	);
	const data = await res.json();
	return { props: { data } };
}
