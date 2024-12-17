import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-2xl font-bold text-white mb-4">Dares</h3>
						<p className="text-gray-400">
							Empowering India's innovation journey through research and monetization solutions.
						</p>
					</div>

					<div>
						<h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
						<ul className="space-y-2">
							<li>
								<a href="#home" className="hover:text-primary-500 transition-colors duration-200">
									Home
								</a>
							</li>
							<li>
								<a href="#services" className="hover:text-primary-500 transition-colors duration-200">
									Services
								</a>
							</li>
							<li>
								<a href="#about" className="hover:text-primary-500 transition-colors duration-200">
									About
								</a>
							</li>
							<li>
								<a href="#contact" className="hover:text-primary-500 transition-colors duration-200">
									Contact
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
						<div className="space-y-4">
							<div className="flex items-center space-x-3">
								<Mail className="w-5 h-5 text-primary-500" />
								<span>care@dares.co.in</span>
							</div>
							<div className="flex items-center space-x-3">
								<MapPin className="w-5 h-5 text-primary-500" />
								<span>Bengaluru-560025</span>
							</div>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-800 mt-12 pt-8 text-center">
					<p>&copy; {new Date().getFullYear()} Dares Technologies. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
