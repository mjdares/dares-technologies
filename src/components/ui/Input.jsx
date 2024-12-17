// src/components/ui/Input.jsx
import React from 'react';

const Input = ({
	label,
	error,
	type = 'text',
	className = '',
	containerClassName = '',
	...props
}) => {
	const baseInputStyles = `
    w-full px-4 py-2 rounded-lg border
    focus:outline-none focus:ring-2
    transition-colors duration-200
  `;

	const getInputStyles = () => {
		if (error) {
			return 'border-red-500 focus:ring-red-200 focus:border-red-500';
		}
		return 'border-gray-300 focus:ring-primary-200 focus:border-primary-500';
	};

	return (
		<div className={`space-y-1 ${containerClassName}`}>
			{label && (
				<label className="block text-sm font-medium text-gray-700">
					{label}
				</label>
			)}

			{type === 'textarea' ? (
				<textarea
					className={`${baseInputStyles} ${getInputStyles()} ${className}`}
					rows="4"
					{...props}
				/>
			) : (
				<input
					type={type}
					className={`${baseInputStyles} ${getInputStyles()} ${className}`}
					{...props}
				/>
			)}

			{error && (
				<p className="text-sm text-red-600 mt-1">
					{error}
				</p>
			)}
		</div>
	);
};

export default Input;
