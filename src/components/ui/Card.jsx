// src/components/ui/Card.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Card = ({
	children,
	variant = 'default',
	className = '',
	animate = true,
	...props
}) => {
	const baseStyles = 'rounded-xl overflow-hidden';

	const variants = {
		default: 'bg-white shadow-lg hover:shadow-xl',
		gradient: 'bg-gradient-to-br from-primary-50 to-secondary-50 shadow-lg hover:shadow-xl',
		outlined: 'border border-gray-200 hover:border-primary-500',
	};

	const content = (
		<div
			className={`${baseStyles} ${variants[variant]} transition-all duration-300 ${className}`}
			{...props}
		>
			{children}
		</div>
	);

	if (animate) {
		return (
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
			>
				{content}
			</motion.div>
		);
	}

	return content;
};

// Card subcomponents for consistent structure
Card.Header = ({ children, className = '' }) => (
	<div className={`p-6 ${className}`}>
		{children}
	</div>
);

Card.Body = ({ children, className = '' }) => (
	<div className={`px-6 py-4 ${className}`}>
		{children}
	</div>
);

Card.Footer = ({ children, className = '' }) => (
	<div className={`p-6 border-t border-gray-100 ${className}`}>
		{children}
	</div>
);

export default Card;
