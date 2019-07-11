import React from 'react';

const NotFound = props => (
	<li className='not-found'>
		<i className="material-icons icon-gif not-found">sentiment_very_dissatisfied</i>
		<h3>No Results Found for {props.query}.</h3>
	</li>
);

export default NotFound;
