// Utility function to format a Date object into a human-readable string
export function formatDate(date) {
	return date.toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	});
}

