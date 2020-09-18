import React from 'react';
import bgImage from '../images/christopher-gower-m_HRfLhgABo-unsplash.jpg';
import logo from '../images/bcc-logo-main.png';

function Hero() {
	return (
		<section
			className='hero padding-y-xl'
			style={{ backgroundImage: `linear-gradient(320deg, hsla(206, 100%, 88%, 0.8), hsl(206, 100%, 78%)), url(${bgImage})` }}
		>
			<div className='container max-width-adaptive-sm'>
				<div className='text-center color-black'>
					<div className='text-component margin-bottom-md'>
						<img src={logo} alt='Blue Collar Coding logo' className='width-50% max-width-100%' />
						<h4 className='color-black'>Website and Web Application Services for Small Businesses</h4>
					</div>

					<div className='flex flex-wrap flex-center gap-md'>
						<a href='mailto:info@bluecollarcoding.com' className='btn btn--primary text-uppercase letter-spacing-md'>
							Contact
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
