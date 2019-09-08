import React from 'react';

const LinkButton = ({link, children}) => {
	return (
		<a href={link} target="_blank" rel="noopener noreferrer">
			<button>
				{children}
			</button>
		</a >
	);
}

export default LinkButton;
