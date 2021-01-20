import './style.css';
export default function LoadingSpinners({ showLoading }) {
	return (
		<div className='LoadingSpinners' style={{ opacity: showLoading }}>
			<div className='LoadingSpinners-loader'>
				<span className='LoadingSpinners-span' style={{ '--i': 1 }}></span>
				<span className='LoadingSpinners-span' style={{ '--i': 2 }}></span>
				<span className='LoadingSpinners-span' style={{ '--i': 3 }}></span>
				<span className='LoadingSpinners-span' style={{ '--i': 4 }}></span>
				<span className='LoadingSpinners-span' style={{ '--i': 5 }}></span>
				<span className='LoadingSpinners-span' style={{ '--i': 6 }}></span>
				<span className='LoadingSpinners-span' style={{ '--i': 7 }}></span>
				<span className='LoadingSpinners-span' style={{ '--i': 8 }}></span>
				<span className='LoadingSpinners-span' style={{ '--i': 9 }}></span>
				<span className='LoadingSpinners-span' style={{ '--i': 10 }}></span>
				<span className='LoadingSpinners-span' style={{ '--i': 11 }}></span>
				<span className='LoadingSpinners-span' style={{ '--i': 12 }}></span>
				<span className='LoadingSpinners-span' style={{ '--i': 13 }}></span>
				<span className='LoadingSpinners-span' style={{ '--i': 14 }}></span>
				<span className='LoadingSpinners-span' style={{ '--i': 15 }}></span>
				<span className='LoadingSpinners-span' style={{ '--i': 16 }}></span>
				<span className='LoadingSpinners-span' style={{ '--i': 17 }}></span>
				<span className='LoadingSpinners-span' style={{ '--i': 18 }}></span>
				<span className='LoadingSpinners-span' style={{ '--i': 19 }}></span>
				<span className='LoadingSpinners-span' style={{ '--i': 20 }}></span>
			</div>
		</div>
	);
}
