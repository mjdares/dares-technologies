// src/components/ui/Button.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
	children,
	variant = 'primary',
	size = 'md',
	className = '',
	...props
}) => {
	const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200';

	const variants = {
		primary: 'bg-gradient-to-r from-primary-600 to-secondary-500 text-white hover:shadow-lg',
		secondary: 'bg-white text-gray-800 border border-gray-300 hover:border-primary-500 hover:text-primary-600',
		outline: 'border-2 border-primary-500 text-primary-600 hover:bg-primary-50',
	};

	const sizes = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-3 text-base',
		lg: 'px-8 py-4 text-lg',
	};

	return (
		<motion.button
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
			className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
			{...props}
		>
			{children}
		</motion.button>
	);
};

export default Button;
