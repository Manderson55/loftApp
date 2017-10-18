// Include React
import React from "react";
import ReactDraggable from "react-draggable";

//class BulletinBoard extends React.Component ({
class Note extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			note : [],
			editing: false
		}
	}
	// getInitialState(){
	// 	return{editing: false}
	// }
//this is not working, how do I determine the width and height of my component? They are rendering one 
//of top of the other
	componentWillMount() {
		this.style = {
			right: this.randomBetween(0, this.innerWidth - 150, "px"),
			top: this.randomBetween(0, this.innerHeight - 150, "px")
		}

	}

	randomBetween(x, y, s) {
		return (x + Math.ceil(Math.random() * (y-x))) + s
	}

	componentDidUpdate(){
		if(this.state.editing){
			this.refs.newText.focus()
			this.refs.newText.select()
		}
	}
	// // this prevents unnecessary re-rendering
	// shouldComponentUpdate(nextProps, nextState){
	// 	return this.props.children !== nextProps.children || this.state !== next.state 

	// },

	edit(){
		this.state = ({editing: true})
	}

	save(){
		this.props.onChange(this.refs.newText.value, this.props.id)
		this.state = ({editing: false})
	}
	//add the save to db here

	remove(){
		this.props.onRemove(this.props.id)
	}
	//add the delete from db here


	handleCheck(){

		this.setState({})

	}

	renderForm(){
		return (
			<div className="note" style={this.style}>
				<textarea ref="newText"
						  defaultValue={this.props.children}> 
				</textarea>
				<button onClick={this.save}>Save</button>
			</div>
			)
	}

	renderDisplay(){
		return (
			<div className="note" style={this.style}>
				<p>{this.props.children}</p>

				<span>
					<button onClick={this.edit}>Edit</button>
					<button onClick={this.remove}>Delete</button>
				</span>
			</div>
			)
	}

	render() {
		return (<ReactDraggable>
				{(this.state.editing) ? this.renderForm()
							 : this.renderDisplay()}
				</ReactDraggable>
			)
		}
};
export default Note;