import mongoose from "mongoose";

// First crete a schema
const noteSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
},{ timestamps: true });

// Then create a model based on that schema (Note is singular and Notes is plural in the database)
const Note = mongoose.model("Note", noteSchema);

export default Note;
