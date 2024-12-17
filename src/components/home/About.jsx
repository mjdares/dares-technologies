// src/components/home/About.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Rocket, Users, CheckCircle, Award } from 'lucide-react';
import { Card } from '@/components/ui';
import { useCounter } from '@/hooks/useCounter';

const About = () => {
	const features = [
		{
			icon: Shield,
			title: 'Trusted Expertise',
			description: 'Years of experience in helping Indian businesses grow and succeed with proven methodologies.',
		},
		{
			icon: Rocket,
			title: 'Innovation First',
			description: 'Cutting-edge solutions that keep you ahead of the competition in rapidly evolving markets.',
		},
		{
			icon: Users,
			title: 'Customer Focus',
			description: 'Dedicated support and personalized strategies tailored to your unique business needs.',
		},
	];

	const metrics = [
		{
			value: 100,
			suffix: '+',
			label: 'Clients Served',
			icon: Users,
			delay: 0
		},
		{
			value: 90,
			suffix: '%',
			label: 'Success Rate',
			icon: CheckCircle,
			delay: 200
		},
		{
			value: 50,
			suffix: '+',
			label: 'Innovation Patents',
			icon: Award,
			delay: 400
		},
		{
			value: 5,
			suffix: '+',
			label: 'Years Experience',
			icon: Shield,
			delay: 600
		},
	];

	const containerAnimation = useAnimation();
	const [containerRef, containerInView] = useInView({
		threshold: 0.2,
		triggerOnce: true
	});

	useEffect(() => {
		if (containerInView) {
			containerAnimation.start('visible');
		}
	}, [containerAnimation, containerInView]);

	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.2
			}
		}
	};

	const itemVariants = {
		hidden: {
			opacity: 0,
			y: 20
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: [0.645, 0.045, 0.355, 1]
			}
		}
	};

	return (
		<section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
						Why Choose Dares
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						We're committed to making India Atma-Nirbhar by empowering businesses with innovative solutions and strategic guidance.
					</p>
				</motion.div>

				<motion.div
					ref={containerRef}
					variants={containerVariants}
					initial="hidden"
					animate={containerAnimation}
					className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
				>
					{features.map((feature, index) => (
						<motion.div
							key={feature.title}
							variants={itemVariants}
							className="relative group"
						>
							<Card className="h-full group-hover:shadow-xl transition-all duration-500 overflow-hidden">
								<Card.Header>
									<div className="flex flex-col items-center relative z-10">
										<motion.div
											whileHover={{
												scale: 1.1,
												rotate: 360
											}}
											transition={{ duration: 0.5 }}
											className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-4"
										>
											<feature.icon className="w-8 h-8 text-white" />
										</motion.div>
										<h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
										<p className="text-gray-600 text-center">{feature.description}</p>
									</div>
									<div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-secondary-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
								</Card.Header>
							</Card>
						</motion.div>
					))}
				</motion.div>

				{/* Metrics Section */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{metrics.map((metric) => {
						const [count, setIsVisible] = useCounter(metric.value, 2000, metric.delay);

						return (
							<motion.div
								key={metric.label}
								initial={{ opacity: 0, scale: 0.5 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									transition: {
										type: "spring",
										stiffness: 100,
										damping: 15,
										delay: metric.delay / 1000
									}
								}}
								viewport={{ once: true, amount: 0.8 }}
								onViewportEnter={() => setIsVisible(true)}
								className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
							>
								<div className="flex flex-col items-center">
									<metric.icon className="w-8 h-8 text-primary-600 mb-3" />
									<div className="text-3xl font-bold text-gray-900 mb-2">
										{count}{metric.suffix}
									</div>
									<div className="text-sm text-gray-600 text-center">
										{metric.label}
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default About;
