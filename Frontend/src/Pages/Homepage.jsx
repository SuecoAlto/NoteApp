import { useEffect, useState } from "react"
import Navbar from "../Components/Navbar"
import RateLimitUI from "../Components/RateLimitUI" 
import { toast } from "react-hot-toast"
import NoteCard from "../Components/NoteCard"
import api from "../lib/axios"

const Homepage = () => {
  // State to manage rate limiting
  const [isRateLimited, setIsRateLimited] = useState(false);

  // State to hold notes data and loading status
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch notes from the backend API
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        console.log(res.data);
        const data = res.data.notes // Changed from res.data to res.data.notes
        setNotes(data); 
        setIsRateLimited(false); // Reset rate limit state on successful fetch
      } catch (error) {
        console.log("Error fetching notes:");
        console.log(error.response);
        if(error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to fetch notes. Please try again later.")
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);


return (
  <div className="min-h-screen">
    <Navbar />

    {isRateLimited && <RateLimitUI />}

    <div className="max-w-7xl mx-auto p-4 mt-6">
      {loading && <div className="text-center text-primary py-10">Loading notes...</div>}

      {/* Show this message when there are no notes */}
      {!loading && notes.length === 0 && !isRateLimited && (
        <div className="text-center text-gray-500 py-10">
          No notes found. Create your first note!
        </div>
      )}

      {notes.length > 0 && !isRateLimited && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map(note => (
            <NoteCard key={note._id} note={note} setNotes={setNotes} />
          ))}
        </div>
      )}
      
    </div>
  </div>
);
}

export default Homepage