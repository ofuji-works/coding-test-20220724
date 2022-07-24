module.exports = {
	roots: [
		"<rootDir>/src",
	],
	collectCoverageFrom: [
		"src/**/*.{ts,tsx}",
		"!src/**/*.d.ts",
		"!src/__tests__",
	],
	setupFiles: [
		"react-app-polyfill/jsdom",
	],
	setupFilesAfterEnv: [
		"<rootDir>/src/__tests__/setupTests.ts",
	],
	testMatch: [
		"<rootDir>/src/__tests__/**/*.{spec}.{ts,tsx}",
	],
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "<rootDir>/config/jest/babelTransform.js",
		"^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
		"^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js",
	},
	transformIgnorePatterns: [
		"[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
	],
	moduleNameMapper: {
		"^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
	},
	moduleFileExtensions: [
		"ts",
		"tsx",
	],
	watchPlugins: [
		"jest-watch-typeahead/filename",
		"jest-watch-typeahead/testname"
	],
	resetMocks: true
}