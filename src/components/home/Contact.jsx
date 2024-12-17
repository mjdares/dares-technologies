// src/components/home/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';
import { Button, Input, Card } from '@/components/ui';
import { COMPANY_INFO } from '@/utils/constants';
import { validateEmail } from '@/utils/helpers';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	});

	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
		// Clear error when user starts typing
		if (errors[name]) {
			setErrors(prev => ({
				...prev,
				[name]: ''
			}));
		}
	};

	const validateForm = () => {
		const newErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = 'Name is required';
		}

		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!validateEmail(formData.email)) {
			newErrors.email = 'Please enter a valid email';
		}

		if (!formData.message.trim()) {
			newErrors.message = 'Message is required';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) return;

		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 1500));

			setSubmitStatus('success');
			setFormData({
				name: '',
				email: '',
				phone: '',
				message: ''
			});
		} catch (error) {
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="contact" className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						Get in Touch
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Ready to start your innovation journey? Contact us today.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="space-y-8"
					>
						<Card variant="gradient">
							<Card.Body>
								<div className="space-y-6">
									<div className="flex items-start space-x-4">
										<Mail className="w-6 h-6 text-primary-600 mt-1" />
										<div>
											<h3 className="text-lg font-semibold mb-1">Email Us</h3>
											<a
												href={`mailto:${COMPANY_INFO.email}`}
												className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
											>
												{COMPANY_INFO.email}
											</a>
										</div>
									</div>

									<div className="flex items-start space-x-4">
										<MapPin className="w-6 h-6 text-primary-600 mt-1" />
										<div>
											<h3 className="text-lg font-semibold mb-1">Location</h3>
											<p className="text-gray-600">{COMPANY_INFO.address}</p>
										</div>
									</div>
								</div>
							</Card.Body>
						</Card>

						<div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-lg">
							<h3 className="text-xl font-semibold mb-4">Ready to Transform Your Business?</h3>
							<p className="text-gray-600 mb-4">
								Let's discuss how we can help you achieve your business goals and contribute to India's self-reliance journey.
							</p>
						</div>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
					>
						<Card>
							<Card.Body>
								<form onSubmit={handleSubmit} className="space-y-6">
									<Input
										label="Name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										error={errors.name}
										required
									/>

									<Input
										label="Email"
										type="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										error={errors.email}
										required
									/>

									<Input
										label="Phone (Optional)"
										type="tel"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
									/>

									<Input
										label="Message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										error={errors.message}
										type="textarea"
										required
									/>

									<Button
										type="submit"
										variant="primary"
										className="w-full"
										disabled={isSubmitting}
										icon={Send}
									>
										{isSubmitting ? 'Sending...' : 'Send Message'}
									</Button>

									{submitStatus === 'success' && (
										<p className="text-green-600 text-center">
											Message sent successfully!
										</p>
									)}

									{submitStatus === 'error' && (
										<p className="text-red-600 text-center">
											Something went wrong. Please try again.
										</p>
									)}
								</form>
							</Card.Body>
						</Card>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
