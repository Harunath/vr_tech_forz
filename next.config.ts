import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */

	images: {
		domains: [
			"res.cloudinary.com", // your Cloudinary images
			"cdn.jsdelivr.net", // devicon icons
			"cdn.simpleicons.org", // Simple Icons for AWS etc
		],
	},
};

export default nextConfig;
