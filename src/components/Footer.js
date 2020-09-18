import React from 'react';

function Footer() {
	return (
		<footer className='main-footer padding-y-sm'>
			<div className='container max-width-lg'>
				<div className='main-footer__colophon flex justify-between border-top padding-top-xs margin-top-lg'>
					<div className='text-sm text-xs@md color-contrast-medium flex flex-wrap gap-xs'>
						<span>Copyright &copy; Blue Collar Coding 2020</span>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
