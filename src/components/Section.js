import React from 'react';

function Section(props) {
	return (
		<section id={props.id} className={`padding-y-md ${props.bgColorClass ? props.bgColorClass : ''}`}>
			<h2 className='text-center'>{props.title}</h2>
			{props.children}
		</section>
	);
}

export default Section;
