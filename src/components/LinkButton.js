import React from 'react';

const LinkButton = ({link, children}) => {
	return (
		<a href={link}>
			<button>
				{children}
			</button>
		</a >
	);
}

export default LinkButton;
