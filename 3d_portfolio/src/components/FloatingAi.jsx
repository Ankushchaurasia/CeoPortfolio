import React from 'react';
import { Mail } from 'lucide-react';

const FloatingAi = () => {
	return (
		<div className="fixed bottom-8 right-8 z-50">
			<div className="bg-gradient-to-r-theme p-4 rounded-full shadow-lg shadow-primary-start/30 cursor-pointer hover:scale-110 transition-transform relative">
				<span className="absolute top-0 right-0 flex h-3 w-3">
					<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
					<span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
				</span>
				<Mail className="text-white" size={24} />
			</div>
		</div>
    );
}

export default FloatingAi;
