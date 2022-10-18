module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:import/recommended", "plugin:json/recommended", "prettier"],
    plugins: ["svelte3", "@typescript-eslint"],
    ignorePatterns: ["*.cjs"],
    overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
    settings: {
        "svelte3/typescript": () => require("typescript"),
        "import/resolver": {
            node: {
                extensions: [".js", ".ts", ".svelte"],
            },
            "eslint-import-resolver-custom-alias": {
                alias: {
                    $lib: "./src/lib",
                    $app: "./.svelte-kit/runtime/app",
                },
                extensions: [".js", ".ts", ".svelte"],
            },
        },
    },
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2020,
    },
    env: {
        browser: true,
        es2017: true,
        node: true,
    },
    rules: {
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-wrappers": "error",
        "no-var": "error",
        "prefer-const": "error",
        "no-misleading-character-class": "error",
        "no-template-curly-in-string": "error",
        "require-atomic-updates": "error",
        curly: "error",
        "linebreak-style": [0, "windows"],
        "no-console": [0],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
            1,
            {
                varsIgnorePattern: "^_",
                argsIgnorePattern: "^_",
            },
        ],
        "no-redeclare": [1],
        "no-unreachable": [1],
        "no-inner-declarations": [0],
        eqeqeq: "error",
        "dot-notation": "error",
        "no-else-return": "error",
        "no-extra-bind": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        "no-magic-numbers": "off",
        "no-param-reassign": "error",
        quotes: [
            1,
            "double",
            {
                avoidEscape: true,
            },
        ],
        "no-empty": [
            "error",
            {
                allowEmptyCatch: true,
            },
        ],
        "prefer-arrow-callback": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "prefer-rest-params": "error",
        "prefer-exponentiation-operator": "error",
        "require-await": "error",
        "sort-imports": [
            "error",
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
            },
        ],
        "import/order": [
            "error",
            {
                groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
                "newlines-between": "always",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            },
        ],
    },
};
