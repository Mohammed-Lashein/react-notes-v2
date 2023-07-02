import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
const EditNote = () => {
	return (
		<section>
			<header className="create-note__header">
				<Link to="/" className="btn">
					<IoIosArrowBack />
				</Link>
				<button className="btn lg primary">Save</button>
				<button className="btn danger">
					<RiDeleteBin6Line />
				</button>
			</header>
			<form className="create-note__form">
				<input type="text" name="" id="" placeholder="Title..." autoFocus />
				<textarea
					name=""
					id=""
					rows="28"
					placeholder="Note details..."
				></textarea>
			</form>
		</section>
	);
};
export default EditNote;
