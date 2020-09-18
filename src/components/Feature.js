import React from 'react';
import pic from '../images/profile-pic.jpg';

function Feature() {
	return (
		<section className='position-relative z-index-1 margin-y-lg'>
			<div className='container max-width-adaptive-xl'>
				<div className='grid'>
					<div className='bg-contrast-lower flex items-center col-6@md'>
						<div className='padding-md padding-x-lg@lg padding-y-xxl@lg'>
							<div className='text-sm color-contrast-medium margin-bottom-xxs  text-uppercase letter-spacing-md font-medium'>
								About Me
							</div>

							<div className='text-component'>
								<h3>Tim Lisiecki</h3>
								<p>
									Previously, I spent 10 years as a USCG licensed captain in the small passenger vessel industry. After learning
									coding in 2015 as a hobby, I committed to web development as a career in 2018.
								</p>
								<p>
									Nowadays, I work full-time as a web developer for a start-up. Over the years I have taught myself skills in HTML,
									CSS, Javascript, PHP, Wordpress, and many other technologies. I started Blue Collar Coding in 2018 to offer web
									services for personal and small business sites.
								</p>
							</div>

							<div className='margin-top-sm'>
								<div className='flex flex-wrap gap-sm items-center'>
									<a href='https://timlisiecki.com' target='_blank' rel='noopener noreferrer' className='color-inherit'>
										Learn more
									</a>
								</div>
							</div>
						</div>
					</div>

					<img className='block width-100% object-cover col-6@md' src={pic} alt='Feature description' />
				</div>
			</div>
		</section>
	);
}

export default Feature;
