import ratelimit from "../../config/upstash.js";


const rateLimiter = async (req, res, next) => {
try {
	const{ success } = await ratelimit.limit("my-limit-key"); //Should be unique for each user, e.g., user ID or IP address
	if (!success) {
		console.error("ERROR: Ratelimit exceeded, please try again later");
		return res.status(429).json({ message: "Too many requests, please try again later." });
	}
	next();
} catch (error) {
	console.error("Error occurred while rate limiting with rateLimiter:", error);
	res.status(500).json({ message: "Internal server error" });
	next(error);
}
}

export default rateLimiter;