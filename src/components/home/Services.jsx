// src/components/home/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui';
import { SERVICES } from '@/utils/constants';
import * as Icons from 'lucide-react';

const Services = () => {
	return (
		<section id="services" className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						Our Services
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Comprehensive solutions designed to empower Indian businesses and drive innovation
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{SERVICES.map((service, index) => {
						const Icon = Icons[service.icon];

						return (
							<motion.div
								key={service.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2 }}
							>
								<Card variant="gradient" className="h-full">
									<Card.Header>
										<div className="flex items-center justify-center mb-4">
											<div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
												<Icon className="w-8 h-8 text-white" />
											</div>
										</div>
										<h3 className="text-xl font-semibold text-center mb-2">
											{service.title}
										</h3>
										<p className="text-gray-600 text-center">
											{service.description}
										</p>
									</Card.Header>
								</Card>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Services;
