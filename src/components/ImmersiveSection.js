import React, { useEffect } from 'react';
import image from '../images/blue-collar-coder.jpg';

function ImmersiveSection() {
	useEffect(() => {
		let frontEnd = document.createElement('script');
		frontEnd.src = '/blue-collar-coding/static/js/_1_immersive-section-transition.js';
		frontEnd.id = 'immersive-section-transition-js';
		document.body.appendChild(frontEnd);
	}, []);

	return (
		<div className='immerse-section-tr padding-top-md js-immerse-section-tr'>
			<div className='immerse-section-tr__media js-immerse-section-tr__media'>
				<div className='container max-width-sm'>
					{/* asset visible on small devices */}
					<figure className='immerse-section-tr__figure immerse-section-tr__figure--3-4 hide@sm js-immerse-section-tr__figure'>
						<img src={image} alt='Blue Collar coder' />
					</figure>
					{/*  asset visible on bigger devices */}
					<figure className='immerse-section-tr__figure immerse-section-tr__figure--16-9 display@sm js-immerse-section-tr__figure'>
						<img src={image} alt='Blue Collar coder' className='radius-lg shadow-lg' />
					</figure>
				</div>
			</div>

			<section className='immerse-section-tr__content bg-transparent padding-top-xl margin-top-lg js-immerse-section-tr__content'>
				{/*  your content here */}
				<div className='container max-width-adaptive-md'>
					<div className='text-component line-height-lg v-space-md'>
						<h3 className='text-center'>Web Services for Personal and Small Business Sites</h3>
						<p>Blue Collar Coding is a freelance website offering web services for personal and small business sites.</p>
						<p>
							I started Blue Collar coding in 2018 after seeing that small businesses need better optimized websites without having to
							spend a ridiculous amount of money on web services. Most businesses I have worked with are just starting up, are seaonal,
							or are small enough that they do not need an agency to manage and maintain their websites. Also, when people learn I am a
							web developer, I sometimes get asked to create personal sites for them like blogs or resume sites because they do not know
							where to start or do not have the time to create one. I believe every business or person in need of a website should be
							able to have one that looks modern, is optimized with best practices, and has the basics for a well-performing website
							&#9135;&#9135; SSL, basic SEO, optimized for mobile, and many other fundamentals &#9135;&#9135; without breaking the bank.
						</p>
					</div>
					<div className='margin-top-md flex flex-column flex-row@md'>
						<div className='margin-y-xs padding-x-sm col-6@md'>
							<h4 className='padding-bottom-xxs'>Small Businesses</h4>
							<p>
								Whether you need help with your existing website, a redesign, or a brand new site, Blue Collar Coding can help! Blue
								Collar Coding can offer services for:
							</p>
							<ul className='list list--ul margin-top-xxs'>
								<li>Landing Page Creation</li>
								<li>Wordpress Sites</li>
								<li>Static Sites</li>
								<li>Website Optimization</li>
								<li>Simple Web Applications using React and Node</li>
								<li>Web Services Consultation</li>
							</ul>
						</div>
						<div className='margin-y-xs padding-x-sm col-6@md'>
							<h4 className='padding-bottom-xxs'>Personal Sites</h4>
							<p>Are you in need of a personal site? Blue Collar Coding can offer services for:</p>
							<ul className='list list--ul margin-top-xxs'>
								<li>Static sites</li>
								<li>Wordpress Sites</li>
								<li>Resume site</li>
								<li>Portfolio site</li>
								<li>Blogs</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default ImmersiveSection;
