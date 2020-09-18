import React from 'react';

// Components
import Appbar from './components/Appbar';
import Hero from './components/Hero';
import ImmersiveSection from './components/ImmersiveSection';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Rates from './components/Rates';
import Section from './components/Section';
import Services from './components/Services';

function App() {
	return (
		<>
			<Appbar />
			<Hero />
			<Section title='Services' id='services' bgColorClass='bg-contrast-lower'>
				<Services />
			</Section>
			<Section title='About Blue Collar Coding' id='about'>
				<ImmersiveSection />
			</Section>
			<Section>
				<Feature />
			</Section>
			<Section title='Portfolio' id='portfolio'>
				<Portfolio />
			</Section>
			<Section id='rates'>
				<Rates />
			</Section>
			<Footer />
		</>
	);
}

export default App;
