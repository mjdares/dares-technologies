import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
			}`}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex-shrink-0">
						<span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
							Dares
						</span>
					</div>

					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-4">
							<NavLink href="#home">Home</NavLink>
							<NavLink href="#services">Services</NavLink>
							<NavLink href="#about">About</NavLink>
							<NavLink href="#contact">Contact</NavLink>
						</div>
					</div>

					<div className="md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
						>
							{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			{isOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<MobileNavLink href="#home" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
						<MobileNavLink href="#services" onClick={() => setIsOpen(false)}>Services</MobileNavLink>
						<MobileNavLink href="#about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
						<MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
					</div>
				</div>
			)}
		</nav>
	);
};

const NavLink = ({ href, children }) => (
	<a
		href={href}
		className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
	>
		{children}
	</a>
);

const MobileNavLink = ({ href, children, onClick }) => (
	<a
		href={href}
		onClick={onClick}
		className="text-gray-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
	>
		{children}
	</a>
);

export default Navbar;

