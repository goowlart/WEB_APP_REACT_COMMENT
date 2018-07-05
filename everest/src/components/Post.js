import React from 'react';

import Comment from './Comment';

export default class Post extends React.Component {
	constructor(props){                                     // Interface for users can create new comments
		super(props);                                       // Going over the properties that come in the posts to the parent class of the react
		this.state = {                                      // All variables of the post were recorded in the state
           comments: [],                                    // The comments will be saved as objects
           newCommentText:''                                // Created to save the comment texts
		};

	this.handleSubmit = this.handleSubmit.bind(this);       // Redefining heandleSubmit and using the bind method for reference to the variable this
	this.handleTextChange = this.handleTextChange.bind(this);
	}
	                            // METHODS
	handleSubmit(e) {                                       // 'e' As parameter to the event variable
	  this.setState({
	  	comments : [ 
	  	...this.state.comments,
	  	{ text: this.state.newCommentText }                 // Changes the value of the object to the value of the newCommentText
	  	] 
	  });
		
		this.setState({ newCommentText: '' })               // To clear the documentary input a variable with empty value

		e.preventDefault();                                 // PreventDefault prevents page loading
	}

	handleTextChange(e) {
		this.setState({ newCommentText: e.target.value })    // newCommentText receives the input value
	}

    render() {
        return ( 
        	<div> 
        		<h2>{ this.props.title }</h2> 
        		<form onSubmit={this.handleSubmit}>
        		<input value={this.state.newCommentText} onChange={this.handleTextChange} />
        		<button type="submit">Comment</button>
        		</form>
        		{ this.state.comments.map((comment, index) => {
                   return <Comment key={index} text={comment.text} />
        		}) } 
        	</div>
        );
    }
}
// this.props accesses the properties of the components
// the map function is used to scroll through the comments
// onSubmit calls a function that prevents page loading
// onChange={} is triggered whenever there is a change in input

