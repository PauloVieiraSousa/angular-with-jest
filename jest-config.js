module.exports = {
    clearMocks: true ,
    coverageDirectory: "coverage",
    coverageReporters: [
        "lcov",
        "clover",
        "jest-unit"
    ],
    globals: {
        "ts-jest": {
            "tsConfig": "tsconfig.json"
        }
    },
    moduleFileExtensions: [
        "ts",
        "js"
    ],
    modulePathIgnorePatterns: ["dist"],
    testEnvironment: "node",
    
}