import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router"; // Fixed import
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
	// Function to handle note deletion
	const handleDelete = async (e, id) => {
		e.preventDefault(); // Prevent navigation when clicking delete
		if (!window.confirm("Are you sure you want to delete this note?")) return; // Confirm before deleting

		try {
			await api.delete(`/notes/${id}`);
			// Update the notes state to remove the deleted note (Update the webbrowser basically)
			setNotes((prev) => prev.filter((note) => note._id !== id)); // Corrected the filter condition to get rid of deleted note
			toast.success("Note deleted successfully");
		} catch (error) {
			toast.error("Failed to delete note");
			console.error(error);
		}
	};

	return (
		<div className="card bg-base-200 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#19B954] p-4">
			<div className="card-body">
				<h3 className="card-title text-lg font-bold">{note.title}</h3>
				<p className="text-base-content/70 line-clamp-3">
					{note.content.length > 100
						? note.content.substring(0, 100) + "..."
						: note.content}
				</p>
				<div className="card-actions justify-between items-center mt-4">
					<span className="text-sm text-base-content/50">
						{formatDate(new Date(note.createdAt))}
					</span>
					<div className="flex items-center gap-1">
						<Link to={`/note/${note._id}`} className="btn btn-ghost btn-xs">
							<PenSquareIcon className="size-4" />
						</Link>
						<button
							className="btn btn-ghost btn-xs text-error"
							onClick={(e) => handleDelete(e, note._id)}
						>
							<Trash2Icon className="size-4" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NoteCard;
