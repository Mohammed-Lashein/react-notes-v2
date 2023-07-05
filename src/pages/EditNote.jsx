import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
const EditNote = ({ setNotes, notes }) => {
	const {id} = useParams();
	// console.log(useParams());
	const note = notes.find((item) => item.id === id);
	const navigate = useNavigate();
	

	const [title, setTitle] = useState(note.title);
	const [details, setDetails] = useState(note.details);
	const handleNoteUpdate = () => {
		if (title && details) {
			const newNote = {...note, title, details};
			// thus we updated the note 
			const newNotes = notes.map((item) => {
				if (item.id === id) {
					item = newNote;
				}
				return item;
				/* Explanation : Here, we want to update the notes array
				that is sent to the local storage , so we loop over it 
				using map , and if we found the element with the specific
				id , we will update it's properties , else we will return
				the item . 
				
				Now we have the notes array updated so that we can update
				it's state . */
			});
			setNotes(newNotes);
		}
		navigate('/');
	};

	const deleteNote = () => {
		const newNotes = notes.filter((item) => item.id != id)
		setNotes(newNotes);
		navigate('/'); 
	}
	return (
		<section>
			<header className="create-note__header">
				<Link to="/" className="btn">
					<IoIosArrowBack />
				</Link>
				<button className="btn lg primary" onClick={handleNoteUpdate}>
					Save
				</button>
				<button className="btn danger" onClick={deleteNote}>
					<RiDeleteBin6Line />
				</button>
			</header>
			<form className="create-note__form">
				<input
					type="text"
					name=""
					id=""
					placeholder="Title..."
					autoFocus
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<textarea
					name=""
					id=""
					rows="28"
					placeholder="Note details..."
					value={details}
					onChange={(e) => setDetails(e.target.value)}
				></textarea>
			</form>
		</section>
	);
};
export default EditNote;
