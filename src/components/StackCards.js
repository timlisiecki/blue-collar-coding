import React, { useEffect } from 'react';
// Components
import Banner from './Banner';

function StackCards() {
	useEffect(() => {
		let frontEnd = document.createElement('script');
		frontEnd.src = '/static/js/_1_stacking-cards.js';
		frontEnd.id = 'stacking-card-js';
		document.body.appendChild(frontEnd);
	}, []);

	return (
		<ul className='stack-cards js-stack-cards'>
			<li className='stack-cards__item bg radius-lg shadow-md js-stack-cards__item'>
				<Banner />
			</li>

			<li className='stack-cards__item bg radius-lg shadow-md js-stack-cards__item'>
				<Banner />
			</li>

			<li className='stack-cards__item bg radius-lg shadow-md js-stack-cards__item'>
				<Banner />
			</li>
		</ul>
	);
}

export default StackCards;
