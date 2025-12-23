import { FlatCompat } from "@eslint/eslintrc";
import esjs from "@eslint/js";
import eslintPrettier from "eslint-config-prettier";
import stylistic from "@stylistic/eslint-plugin";
import { configs as _configs } from "typescript-eslint";
import { defineConfig } from "eslint/config";

/* import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); */

const compat = new FlatCompat();

export default defineConfig([
	...compat.config({}),
	stylistic.configs["disable-legacy"],
	{
		files: [
			"resources/**/*.ts",
			"resources/**/*.js",
			"scripts/**/*.ts",
			"scripts/**/*.js",
			"*.config.js",
			"*.config.mjs",
			"*.config.ts",
			"*.config.mts",
		],
		plugins: {
			"@stylistic": stylistic,
		},
		extends: [
			esjs.configs.recommended,
			..._configs.strictTypeChecked,
			..._configs.stylisticTypeChecked,
			eslintPrettier,
		],
		languageOptions: {
			parserOptions: {
				// debugLevel: ['eslint', 'typescript-eslint', 'typescript'],
				tsconfigRootDir: __dirname,
				EXPERIMENTAL_useProjectService: false,
				projectService: true,
			},
		},
		rules: {
			"@stylistic/lines-around-comment": [
				"error",
				{
					beforeBlockComment: true,
					allowObjectStart: true,
					allowArrayStart: true,
				},
			],
			"@stylistic/lines-between-class-members": ["error", "always"],
			"@stylistic/no-trailing-spaces": "error",
			"@stylistic/quotes": "error",
			"@typescript-eslint/no-unnecessary-qualifier": "error",
			"@typescript-eslint/prefer-as-const": "error",
			"@typescript-eslint/no-namespace": "off",
			"@typescript-eslint/no-unnecessary-type-parameters": "off",
			"@typescript-eslint/no-non-null-assertion": "off",
			"@typescript-eslint/no-misused-promises": "off",
			"@typescript-eslint/array-type": "off",
			"@typescript-eslint/restrict-template-expressions": "off",
			"@typescript-eslint/prefer-literal-enum-member": "off",
		},
	},
	{
		files: ["**/*.js"],
		extends: [_configs.disableTypeChecked],
		rules: {
			"@typescript-eslint/no-var-requires": "off",
		},
	},
]);
