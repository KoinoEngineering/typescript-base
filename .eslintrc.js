const warn = process.env.NODE_ENV === "development" ? "warn" : "error";

module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "indent": "off",
        "no-unused-vars": "off",
        "no-console": warn,
        "block-spacing": "error",
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "semi": "error",
        "quotes": [
            "error",
            "double"
        ]
    }
};
