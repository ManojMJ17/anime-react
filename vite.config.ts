import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@components": path.resolve(__dirname, "./src/components"), // Alias for components
			"@": path.resolve(__dirname, "./src"), // Optional: Alias for src folder
		},
	},
});
