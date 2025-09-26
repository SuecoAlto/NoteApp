import Note from '../models/Note.js';


// Controller functions for handling note-related requests
export const getAllNotes = async (req, res) => {
	// Handler function to fetch all notes
	try {
		const notes = await Note.find().sort({ createdAt: -1 }); // Sort notes by creation date in descending order
		res.status(200).json({ notes });
	} catch (error) {
		console.error('Error handling getAllNotes api request:', error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
}

// Controller function to fetch a note by ID, = (req, res) => {}
export const getNoteById = async (req, res) => { 
	try {
		const { id } = req.params;
		const note = await Note.findById(id);
		if (!note) {
			return res.status(404).json({ message: 'Note not found' });
		}
		res.status(200).json({ note });
	} catch (error) {
		console.error('Error handling getNoteById api request:', error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
};

// Controller function to create a new note
export const createNote = async (req, res) => { 
	try {
		const { title, content } = req.body
		console.log('Creating note:', { title, content });
		const newNote = new Note({ title, content });
		const savedNote = await newNote.save();
		res.status(201).json({ message: 'Note created successfully', note: savedNote });
	} catch (error) {
		console.error('Error handling createNote api request:', error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
};


// Controller function to update a note by ID
export const updateNote = async (req, res) => {
	// Handler function to update a note by ID
		try {
		const { id } = req.params;
		const { title, content } = req.body
		console.log('Note updated:', { title, content });
		const updatedNote = await Note.findByIdAndUpdate(id, { title, content }, { new: true });
		if (!updatedNote) {
			return res.status(404).json({ message: 'Note not found' });
		}
		res.status(200).json({ message: `You just updated note ${id}!`, note: updatedNote });
	} catch (error) {
		console.error('Error handling updateNote api request:', error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
};

// Controller function to delete a note by ID
export const deleteNote = async (req, res) => {
	// Handler function to delete a note by ID
	try {
		const { id } = req.params;
		const deletedNote = await Note.findByIdAndDelete(id);
		if (!deletedNote) {
			return res.status(404).json({ message: 'Note not found' });
		}
		res.status(200).json({ message: `You just deleted note ${id}!` });
	} catch (error) {
		console.error('Error handling deleteNote api request:', error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
};