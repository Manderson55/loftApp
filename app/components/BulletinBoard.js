import React from "react";
import ReactDOM from "react-dom";

import Note from "./Note";

class BulletinBoard extends React.Component {


	constructor(props){
		super(props)
		this.state = {
			notes: []
		}
	}

	add(text){
		var notes = [
			...this.state.notes,
			{
				id: this.nextId(),
				note: text
			}
		]
		this.setState({notes})
	}

	nextId() {
		this.uniqueId = this.uniqueId || 0
		return this.uniqueId++
	}

    update(newText, id) {
        var notes = this.state.notes.map(
            note => (note.id !== id) ?
                 note : 
                        {
                            note, 
                            note: newText
                        }
                    )
                this.setState({notes})
    }

	remove(id) {
		var notes = this.state.notes.filter(note => note.id !== id)
		this.setState({notes})
	}

	eachNote(note){
		return(<Note key={note.id}
					 id={note.id}
					 // onChange={this.update}
					 // onRemove={this.remove}
					 >
					 {note.note}
				</Note>)
	}

	render(){
		return (
            <div className = "container">

                <div className="panel">
                        <div className="panel-heading ">Bulletin Board</div>
                        <div className="panel-body bulletinBoard">			
			
							{this.state.notes.map(this.eachNote)}
							<button className="addNote" onClick={() => this.add("New Note")}>+</button>
						</div>
				</div>		
			</div>
		)
	}


};
export default BulletinBoard;