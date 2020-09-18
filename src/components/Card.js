import React from 'react';

function Card(props) {
	return (
		<div className={`card-v10 card-v10--state-${props.horizontal ? '2' : '1'} col@sm`}>
			<div className='card-v10__img-link radius-lg shadow-lg'>
				<img src={props.imageUrl} alt='Card description' />
			</div>

			<div className='card-v10__content-wrapper'>
				<div className='card-v10__content bg shadow-xs radius-lg'>
					<div className='card-v10__body'>
						<div className='text-component'>
							<h3 className='card-v10__title'>{props.title}</h3>
							<p className='card-v10__excerpt color-contrast-medium'>{props.description}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
