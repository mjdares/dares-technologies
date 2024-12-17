// src/App.jsx
import React from 'react';
import Navbar from './components/layout/navbar';
import Hero from './components/home/Hero';
import Services from './components/home/Services';
import About from './components/home/About';
import Contact from './components/home/Contact';
import Footer from './components/layout/Footer';

const App = () => {
	return (
		<div className="min-h-screen bg-gray-50">
			<Navbar />
			<main>
				<Hero />
				<Services />
				<About />
				<Contact />
			</main>
			<Footer />
		</div>
	);
};

export default App;
