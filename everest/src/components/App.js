//App.js component of all other components 
import React from 'react';

import Post from './Post';

export default class App extends React.Component {
	render() {
		return (
				<div>
					<h1>Hello Word</h1>
			        <Post title="<3 react" />
			        <Post title="Test React !"/>
			        <Post title="By Alex GOULART"/>
				</div>
		);
    }
}