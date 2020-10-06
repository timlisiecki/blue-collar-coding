import React from 'react';

function Rates() {
	return (
		<section className='container margin-y-md'>
			<div className='grid'>
				<div className='col-6@md bg-contrast-lower overflow-hidden' aria-hidden='true'>
					<div className='text-component v-space-md height-100% flex flex-column padding-md padding-lg@md'>
						<h2 className='text-center'>Rates</h2>
						<p className='margin-top-sm margin-top-xxs@md'>
							Rates are custom to each project, so please contact me and I will get back to you with an affordable rate.
						</p>
					</div>
				</div>

				<div className='col-6@md'>
					<div className='text-component v-space-md height-100% flex flex-column padding-md padding-lg@md'>
						<h2 className='text-center'>Contact</h2>
						<p className='margin-top-sm margin-top-xxs@md'>Have any questions or comments?</p>
						<a href='mailto:info@bluecollarcoding.com' className='btn btn--primary text-uppercase letter-spacing-md'>
							Contact
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Rates;
