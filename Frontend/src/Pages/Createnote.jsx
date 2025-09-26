import { Link, useNavigate } from "react-router";
import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import api from "../lib/axios";


const Createnote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  // const navigate = useNavigate(); // Uncomment if navigation after note creation is needed, then you need to uncomment line 33 also

  // Handle form submission to the backend to create a new note
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!title.trim() || !content.trim()) {
      toast.error("Title and Content are all required");
      return;
    }

    // Show loading state
    setLoading(true);
    try {
      await api.post("notes/", {
        title,
        content,
      });
      toast.success("Note created successfully");
      // navigate("/");  // Commented out to prevent navigation to the homepage after creation, uncomment if automatic navigation is needed to the homepage
    } catch (error) {
      console.log("Error creating note:", error);
      if(error.response.status === 429){
        toast.error("Slow down, you are creating notes too fast", {
          duration: 4000,
        });
      } else {
        toast.error("Failed to create note. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    // back to homepage link and button
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>

          {/* // Card body for creating a note */}
          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Create New Note</h2>

              {/* // Forum content starts here */}
              <form onSubmit={handleSubmit}>
                {/* // Title input starts here */}
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Note Title"
                    className="input input-bordered"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                {/* // Content input starts here */}
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Content</span>
                  </label>
                  <textarea
                    placeholder="Write your note here..."
                    className="textarea textarea-bordered h-32"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                {/* // Button action starts here */}
                <div className="card-actions justify-end">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? "Creating..." : "Create Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createnote;
