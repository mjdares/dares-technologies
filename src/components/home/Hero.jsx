// src/components/home/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui';
import { COMPANY_INFO } from '@/utils/constants';

const Hero = () => {
	return (
		<section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden">
				<motion.div
					animate={{
						scale: [1, 1.2, 1],
						rotate: [0, 90, 0],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: "linear"
					}}
					className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary-500/10 to-transparent rounded-full"
				/>
				<motion.div
					animate={{
						scale: [1, 1.5, 1],
						rotate: [0, -90, 0],
					}}
					transition={{
						duration: 15,
						repeat: Infinity,
						ease: "linear"
					}}
					className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-secondary-500/10 to-transparent rounded-full"
				/>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Text Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center lg:text-left"
					>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
							Empowering India's
							<span className="block bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
								Innovation Journey
							</span>
						</h1>
						<p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
							{COMPANY_INFO.description} Partner with us to transform your innovative ideas into successful ventures.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
							<Button
								variant="primary"
								size="lg"
								icon={ArrowRight}
								onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
							>
								Get Started
							</Button>
							<Button
								variant="outline"
								size="lg"
								onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
							>
								Explore Services
							</Button>
						</div>
					</motion.div>

					{/* Animated Illustration */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className="relative"
					>
						<div className="relative w-full h-[400px]">
							{/* Floating elements */}
							<motion.div
								animate={{
									y: [-20, 20, -20],
									rotate: [0, 5, 0],
								}}
								transition={{
									duration: 5,
									repeat: Infinity,
									ease: "easeInOut"
								}}
								className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-primary-500/30 to-transparent rounded-lg backdrop-blur-lg"
							/>
							<motion.div
								animate={{
									y: [20, -20, 20],
									rotate: [0, -5, 0],
								}}
								transition={{
									duration: 6,
									repeat: Infinity,
									ease: "easeInOut"
								}}
								className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-tr from-secondary-500/30 to-transparent rounded-lg backdrop-blur-lg"
							/>
							{/* Add more floating elements as needed */}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
