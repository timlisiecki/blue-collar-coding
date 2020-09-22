import React, { useEffect } from 'react';
import logo from '../images/bcc-logo-horizontal-e1535033175916.png';

function Appbar() {
	useEffect(() => {
		let frontEnd = document.createElement('script');
		frontEnd.src = '/blue-collar-coding/static/_1_header.js';
		frontEnd.id = 'header-js';
		document.body.appendChild(frontEnd);

		let smoothScroll = document.createElement('script');
		smoothScroll.src = '/blue-collar-coding/static/_1_smooth-scrolling.js';
		smoothScroll.id = 'smooth-scroll-js';
		document.body.appendChild(smoothScroll);
	}, []);

	function scrollToTop() {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}

	return (
		<header className='header position-sticky top-0 shadow-xs js-header' style={{ zIndex: 'var(--zindex-overlay)' }}>
			<div className='header__container container max-width-lg'>
				<div className='header__logo padding-y-sx'>
					<div onClick={scrollToTop} className='cursor-pointer'>
						<img src={logo} alt='Blue Collar Coding logo' style={{ maxHeight: '3rem' }} />
					</div>
				</div>

				<button className='btn header__trigger js-header__trigger' aria-label='Toggle menu' aria-expanded='false' aria-controls='header-nav'>
					<i className='header__trigger-icon' aria-hidden='true'></i>
				</button>

				<nav className='header__nav js-header__nav' id='header-nav' role='navigation' aria-label='Main'>
					<div className='header__nav-inner'>
						<ul className='header__list'>
							<li className='header__item'>
								<a
									href='#services'
									className='header__link text-uppercase letter-spacing-md font-medium js-smooth-scroll'
									data-duration='300'
								>
									Services
								</a>
							</li>
							<li className='header__item'>
								<a
									href='#about'
									className='header__link text-uppercase letter-spacing-md font-medium js-smooth-scroll'
									data-duration='300'
								>
									About
								</a>
							</li>
							<li className='header__item'>
								<a
									href='#portfolio'
									className='header__link text-uppercase letter-spacing-md font-medium js-smooth-scroll'
									data-duration='300'
									// aria-current='page'
								>
									Portfolio
								</a>
							</li>
							<li className='header__item'>
								<a
									href='#rates'
									className='header__link text-uppercase letter-spacing-md font-medium js-smooth-scroll'
									data-duration='300'
								>
									Rates
								</a>
							</li>
							<li className='header__item header__item--divider' aria-hidden='true'></li>
							<li className='header__item'>
								<a href='mailto:info@bluecollarcoding.com' className='btn btn--primary text-uppercase letter-spacing-md'>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
	);
}

export default Appbar;
