import { CiSearch } from "react-icons/ci";
import dummyNotes from "../dummy-notes";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import NoteItem from "../components/NoteItem";
const Notes = () => {
  /* In the NoteItem we passed the note object to
  each component because we will need it in the NoteItem
  component .  */
	return (
		<section>
			<header className="notes__header">
				<h2>my notes</h2>
				{/* <input type="text" name="" id="" autoFocus placeholder="Keyword..." /> */}
				<button className="btn">
					<CiSearch />
				</button>
			</header>

			<div className="notes__container">
				{dummyNotes.map((note) => (
					<NoteItem key={note.id} note = {note}/>
				))}
			</div>
			<Link className="btn add__btn">
				<BsPlusLg />
			</Link>
		</section>
	);
};
export default Notes;
