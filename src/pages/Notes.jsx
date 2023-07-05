import { CiSearch } from "react-icons/ci";
import {MdClose} from 'react-icons/md';
import dummyNotes from "../dummy-notes";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import NoteItem from "../components/NoteItem";
import { useEffect, useState } from "react";

const Notes = ({ notes }) => {
	/* Now we have access to the notes as a prop */
	/* In the NoteItem we passed the note object to
  each component because we will need it in the NoteItem
  component .  */
	const [showSearch, setShowSearch] = useState(false);
	const [text, setText] = useState('');
	const [filteredNotes, setFilteredNotes] = useState(notes);

	const handleSearch = () => {
		setFilteredNotes(notes.filter((note) => {
			if (note.title.toLowerCase().match(text.toLowerCase())) {
				return note;
			}
		}))
	};
	useEffect(handleSearch, [text]);
	return (
		<section>
			<header className="notes__header">
				{showSearch ? (
					<input type="text" name="" id="" autoFocus placeholder="Keyword..." value={text} onChange = {(e) => {
						setText(e.target.value);
						handleSearch();
					}
					} />
				) : (
					<h2>my notes</h2>
				)}

				<button className="btn" onClick={() => setShowSearch(!showSearch)}>
					{showSearch ? <MdClose/>:  <CiSearch />}
				</button>
			</header>


			<div className="notes__container">
				{filteredNotes.length === 0 && <p className='empty__notes'>No notes found.</p>}
				{filteredNotes.map((note) => (
					<NoteItem key={note.id} note={note} />
				))}
			</div>
			<Link className="btn add__btn" to="/create-note">
				<BsPlusLg />
			</Link>
		</section>
	);
};
export default Notes;
