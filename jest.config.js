module.exports = {
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'\\.(css|less)$': '<rootDir>/__mocks__/fileMock.js'
	},
	setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
};
