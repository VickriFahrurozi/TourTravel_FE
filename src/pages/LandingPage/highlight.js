/** @format */
import Image from 'next/image';
import { useRouter } from 'next/router';
const Highlight = (data) => {
	const router = useRouter();
	const { result } = data.data.data.data;
	console.log(result);

	return (
		<>
			<div className='row highlight mb-5 '>
				<div className='col'>
					<div className='col-12 d-flex justify-content-center text-success mb-4'>
						<div className='whyus-word'> DESTINASI FAVORIT</div>
					</div>

					<div className='col-12 d-flex overflow-auto'>
						{result?.map((item, index) => {
							return (
								<>
									<div className='col-6 card highlight-card '>
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
								</>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Highlight;
