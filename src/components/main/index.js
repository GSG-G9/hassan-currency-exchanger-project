import React, { useState } from 'react';
import Header from '../Header';
import Loading from '../Loading';
import './style.css';

const currencies = [
	'AUD',
	'BGN',
	'BRL',
	'CAD',
	'CHF',
	'CNY',
	'CZK',
	'DKK',
	'GBP',
	'HKD',
	'HRK',
	'HUF',
	'IDR',
	'ILS',
	'INR',
	'ISK',
	'JPY',
	'KRW',
	'MXN',
	'MYR',
	'NOK',
	'NZD',
	'PHP',
	'PLN',
	'RON',
	'RUB',
	'SEK',
	'SGD',
	'THB',
	'TRY',
	'USD',
	'ZAR',
	'EUR',
];

export default function Main() {
	const [value, setValue] = useState(0);
	const [result, setResult] = useState(0);
	const [fromCurrency, setFromCurrency] = useState('USD');
	const [toCurrency, setToCurrency] = useState('EUR');
	const [newRequest, setNewRequest] = useState(false);
	const [loading, setLoading] = useState(false);
	const [currenciesCache, setCurrenciesCache] = useState({});
	const [error, setError] = useState('');

	const handleClick = () => {
		if (isNaN(value)) {
			return setError(
				`Your input value ${value} is invalid, Please enter a valid number...!`
			);
		}
		setLoading(true);
		setError('');
		if (
			currenciesCache[fromCurrency] &&
			Date.now() - currenciesCache[fromCurrency].dateTime <= 7200000
		) {
			setNewRequest(true);
			setLoading(false);
			return setResult(
				(currenciesCache[fromCurrency].rates[toCurrency] * +value).toFixed(3)
			);
		}

		return fetch(`https://api.exchangeratesapi.io/latest?base=${fromCurrency}`)
			.then((res) => res.json())
			.then(({ rates }) => {
				setCurrenciesCache((data) => ({
					...data,
					[fromCurrency]: { rates, dateTime: Date.now() },
				}));
				setNewRequest(true);
				setLoading(false);
				return setResult((rates[toCurrency] * +value).toFixed(3));
			})
			.catch(() => {
				setError('Failed To Fetch, Please Try again later ...');
			});
	};

	const swapCurrency = () => {
		setToCurrency(fromCurrency);
		setFromCurrency(toCurrency);
		handleClick();
	};

	return (
		<div className='main-section'>
			<Header></Header>
			<Loading showLoading={loading ? 1 : 0} />
			<section className='currency-section'>
				<p
					className='currency-main-text'
					style={{ opacity: newRequest ? 1 : 0 }}
				>
					XE Currency Converter: {value} {fromCurrency} to {toCurrency} =
					{result} {toCurrency}s
				</p>

				<main className='currency-main'>
					<div className='currency-inputs'>
						<div className='currency-inputs-row-box'>
							<label htmlFor=''>Amount</label>
							<input
								type='text'
								className='currency-input-text'
								value={value}
								onChange={({ target: { value } }) => {
									setNewRequest(false);
									setValue(value);
								}}
							/>
						</div>
						<div className='currency-inputs-row-box'>
							<label htmlFor=''>From</label>
							<select
								className='currency-select'
								value={fromCurrency}
								onChange={(e) => {
									setNewRequest(false);
									setFromCurrency(e.target.value);
								}}
							>
								{currencies.map((c, index) => (
									<option key={index} value={c}>
										{c}
									</option>
								))}
							</select>
						</div>
						<div className='currency-exchange-arrows' onClick={swapCurrency}>
							<svg
								aria-hidden='true'
								data-id='icon-exchange'
								viewBox='0 0 50 47'
								height='32px'
								width='30px'
							>
								<path
									fill='white'
									fillRule='evenodd'
									d='M49.897 35.977L26.597 25v7.874H7.144v6.207h19.455v7.874zM.103 11.642l23.3 10.977v-7.874h19.454V8.538H23.402V.664z'
								></path>
							</svg>
						</div>
						<div className='currency-inputs-row-box'>
							<label htmlFor=''>To</label>
							<select
								className='currency-select'
								value={toCurrency}
								onChange={(e) => {
									setNewRequest(false);
									setToCurrency(e.target.value);
								}}
							>
								{currencies.map((c, index) => (
									<option key={index} value={c}>
										{c}
									</option>
								))}
							</select>
						</div>
						<div className='currency-exchange-button-div'>
							<button
								className='currency-exchange-button'
								onClick={handleClick}
							>
								<svg
									className='currency-arrow-svg'
									aria-hidden='true'
									data-id='icon-chevron-right'
									viewBox='0 0 8 13'
									color='#002272'
								>
									<path
										fill='rgb(0 ,34, 114)'
										d='M.59 11.34l4.58-4.59L.59 2.16 2 .75l6 6-6 6z'
									></path>
								</svg>
							</button>
						</div>
					</div>

					{error ? <p className='error'>{error}</p> : ''}

					<div
						className='currency-output-result'
						style={{ opacity: newRequest ? 1 : 0 }}
					>
						<p className='currency-result-1'>
							{value} {fromCurrency} ={' '}
						</p>
						<p className='currency-result-2'>
							{result} {toCurrency}
						</p>

						<p
							className='currency-result-3'
							style={{ opacity: +value !== 0 ? 1 : 0 }}
						>
							1 {fromCurrency} = {(+result / value).toFixed(3)} {toCurrency}
						</p>
						<p
							className='currency-result-3'
							style={{ opacity: +value !== 0 ? 1 : 0 }}
						>
							1 {toCurrency} = {(value / +result).toFixed(3)} {fromCurrency}
						</p>
					</div>
				</main>
			</section>
		</div>
	);
}
