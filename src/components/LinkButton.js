import React from 'react';

const LinkButton = ({link, children}) => {
	return (
		<a href={link} target="_blank">
			<button>
				{children}
			</button>
		</a >
	);
}

export default LinkButton;
