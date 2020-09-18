import React from 'react';

function Banner(props) {
	return (
		<div className='banner container margin-y-lg max-width-adaptive-lg radius-md overflow-hidden'>
			<a href={props.url} target='_blank' rel='noopener noreferrer' className='text-decoration-none' aria-label='Shop Now'>
				<div className='grid flex-row-reverse@md'>
					<div className='col-6@md bg-contrast-lower overflow-hidden' aria-hidden='true'>
						<div
							className='banner__figure width-100%'
							style={{ backgroundImage: `url(${props.thumbnail})`, backgroundPosition: 'top' }}
						></div>
					</div>

					<div className='col-6@md bg-contrast-lower'>
						<div className='text-component v-space-md height-100% flex flex-column padding-md padding-lg@md'>
							<h3>{props.title}</h3>
							{props.description ? <p>{props.description}</p> : ''}
							<p className='margin-top-auto'>
								<span className='banner__link'>
									<i>View Site</i>
								</span>
							</p>
							<p className='color-black text-sm'>
								Tags:
								{props.tags.map((tag, index) => (
									<span key={index} className=' margin-x-xxs padding-xxxxs bg-contrast-low'>
										{tag}
									</span>
								))}
							</p>
						</div>
					</div>
				</div>
			</a>
		</div>
	);
}

export default Banner;
