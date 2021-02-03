module.exports = {
    clearMocks: true,
    coverageDirectory: "coverage",
    coveragePathIgnorePatterns: [
        "/node_modules/"
    ],
    coverageReporters: [
        "json",
        "text",
        "lcov",
        "clover"
    ],
    preset: "jest-preset-angular",
    roots: ['<rootDir>/src'],
    modulePaths: ['<rootDir>/dist'],
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    testMatch: ["**/src/**/*.spec.ts"],
    transformIgnorePatterns: [
        "/node_modules/"
    ],
    modulePathIgnorePatterns: [
        "<rootDir>/node_modules/."
    ]
}