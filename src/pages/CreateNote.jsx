import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import useCreateDate from "../components/useCreateDate";

const CreateNote = ({setNotes}) => {
	const [title, setTitle] = useState("");
	const [details, setDetails] = useState("");
	const date = useCreateDate();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(title, details);


		if (title && details) {
			const note = {
				id: uuid(),
				title,
				details,
				date,
			}
			setNotes((prevNotes) => {
				return [note, ...prevNotes];
				/* We reversed the order of destructuring so that the
				new notes are added to the beginning instead of the 
				being added to the end .  */
			} );
		}
		setTitle('')
		setDetails('');
	};


	return (
		<section>
			<header className="create-note__header">
				<Link to="/" className="btn">
					<IoIosArrowBack />
				</Link>
				<button className="btn lg primary" onClick={handleSubmit}>
					Save
				</button>
			</header>
			<form className="create-note__form" onSubmit={handleSubmit}>
				<input
					type="text"
					name=""
					id=""
					placeholder="Title..."
					autoFocus
					onChange={(e) => setTitle(e.target.value)}
					value={title}
				/>
				<textarea
					name=""
					id=""
					rows="28"
					placeholder="Note details..."
					onChange={(e) => setDetails(e.target.value)}
					value={details}
				></textarea>
			</form>
		</section>
	);
};
export default CreateNote;
