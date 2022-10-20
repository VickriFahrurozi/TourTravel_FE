/** @format */
import Image from 'next/image';
import { checklist } from '../../components/asset/asset';
const Whyus = () => {
	return (
		<>
			<div className='row pt-5'>
				<div className='col d-flex flex-wrap justify-content-center '>
					<div className='col-12 whyus col d-flex justify-content-center text-success'>
						WHY US ?
					</div>
					<div className='col-12'>
						<div className='col-12  ms-5 whyus-testimoni'>
							<div className='whyus-word d-flex justify-content-center'>
								Sudah Terpercaya Sejak Lama
							</div>
							<div className='flex-wrap whyus-sub-word d-flex justify-content-center'>
								Tour & Travel telah berdiri sejak tahun 2010 , dengan segudang
								pengalaman yang dimiliki . Tour & Travel berkomitmen untuk tetap
								memprioritaskan pelanggan dengan memberikan layanan yang baik
								baik sebelum,saat,ataupun sesudah menggunakan jasa kami
							</div>
						</div>
						<div className='col-12  ms-5 whyus-testimoni'>
							<div className='whyus-word d-flex justify-content-center'>
								Pelayanan 100%
							</div>
							<div className='flex-wrap whyus-sub-word d-flex justify-content-center'>
								Tour & Travel berkomitmen penuh untuk menjaga kualitas layanan
								kepada pelanggan karena kami percaya bahwa salah satu kunci
								kesuksesan dari sebuah bisnis adalah pelanggan
							</div>
						</div>
						<div className='col-12  ms-5 whyus-testimoni'>
							<div className='whyus-word d-flex justify-content-center'>
								Destinasi Wisata Banyak
							</div>
							<div className='flex-wrap whyus-sub-word d-flex justify-content-center'>
								Tour & Travel Memiliki hampir 100 destinasi wisata yang bisa
								anda nikmati sepanjang tahun baik dalam maupun luar negeri
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Whyus;
