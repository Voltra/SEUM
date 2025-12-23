import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
	plugins: [
		laravel({
			input: [
				// CSS
				"resources/css/app.css",
				"resources/css/filament/admin/theme.css",

				// JS
				"resources/js/app.js",
			],
			refresh: true,
		}),
		tailwind(),
	],
	server: {
		watch: {
			ignored: ["**/storage/framework/views/**"],
		},
	},
});
