import React from 'react';
import Card from './Card';
import websiteThumbnail from '../images/halacious-tZc3vjPCk-Q-unsplash.jpg';
import appThumbnail from '../images/carlos-muza-hpjSkU2UYSU-unsplash.jpg';
import consultantThumbnail from '../images/luke-chesser-JKUTrJ4vK00-unsplash.jpg';

function Services() {
	const services = [
		{
			id: 0,
			title: 'Website Development',
			description:
				'Whether it is a landing page, Wordpress site, or modern Javascript site, Blue Collar Coding can build you the site your small business needs.',
			image: websiteThumbnail,
		},
		{
			id: 1,
			title: 'Web Application Development',
			description:
				'Do you need a a simple web application to handle your business logic? Blue Collar Coding can build you a simple web application using React, Node, and Express..',
			image: appThumbnail,
		},
		{
			id: 2,
			title: 'Web Consultation',
			description:
				'Need an expert to take a look at your website or web app? Blue Collar Coding can review your website or web app to make recommendations in order to improve UI/UX, performance, and optimizaton. ',
			image: consultantThumbnail,
		},
	];

	return (
		<div className='grid gap-lg padding-md'>
			{services.map(service => {
				return <Card key={service.id} horizontal={false} title={service.title} description={service.description} imageUrl={service.image} />;
			})}
		</div>
	);
}

export default Services;
