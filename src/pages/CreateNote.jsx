import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
const CreateNote = () => {
	return (
		<section>
			<header className="create-note__header">
				<Link to="/" className='btn'>
					<IoIosArrowBack />
				</Link>
        <button className="btn lg primary">Save</button>
			</header>
      <form className="create-note__form">
        <input type="text" name="" id="" placeholder='Title...' autoFocus/>
        <textarea name="" id="" rows="28" placeholder="Note details..."></textarea>
      </form>
		</section>
	);
};
export default CreateNote;
