import React from 'react';
import mbl from '../images/mbl.png';
import beh from '../images/beh.png';
import iwm from '../images/iwm.png';
import cts from '../images/cts.png';
// Components
import Banner from './Banner';

function Portfolio() {
	const portfolio = [
		{
			id: 1,
			title: 'Mass Bay Lines',
			description: '',
			link: 'http://massbaylines.com/',
			image: mbl,
			tags: ['maintenance', 'Wordpress'],
		},
		{
			id: 2,
			title: 'Boston Executive Helicopters',
			description: '',
			link: 'https://bostonexecutivehelicopters.com/',
			image: beh,
			tags: ['development', 'maintenance', 'Wordpress'],
		},
		{
			id: 3,
			title: 'India Wharf Marina',
			description: '',
			link: 'https://indiawharfmarina.com/',
			image: iwm,
			tags: ['development', 'Wordpress'],
		},
		{
			id: 4,
			title: 'Confluent Therapy Solutions',
			description: '',
			link: 'https://confluenttherapysolutions.com/',
			image: cts,
			tags: ['consultation', 'Wordpress'],
		},
	];

	return (
		<>
			{portfolio.map(project => {
				return (
					<Banner
						key={project.id}
						title={project.title}
						description={project.description}
						url={project.link}
						thumbnail={project.image}
						tags={project.tags}
					/>
				);
			})}
		</>
	);
}

export default Portfolio;
