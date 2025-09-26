import { Link } from "react-router"
import { PlusIcon } from "lucide-react"

const Navbar = () => {
	return (
	<header className="bg-base-200 boarder-b border-base-content/10">

		{/* Navbar content */}
		<div className="mx-auto max-w-6xl p-4">
			<div className="flex items-center justify-between">
				<div className="text-3xl font-bold text-primary font-mono tracking-tight"><Link to={"/"}>NoteApp</Link></div>
				<div className="flex items-center gap-4">
					<Link to={"/createnote"} className="btn btn-primary"> 
						<PlusIcon className="size-6" />
						<span>Create Note</span>
					</Link>
				</div>
			</div>
		</div>

	</header>
);
};

export default Navbar;	