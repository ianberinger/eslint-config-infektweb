var checkModuleAvailability = require('../helpers/checkModuleAvailability');

checkModuleAvailability('babel-eslint');
checkModuleAvailability('eslint-plugin-babel');
checkModuleAvailability('eslint-plugin-import');

module.exports = {
    'parser': 'babel-eslint',
    'plugins': [
        'babel',
        'import'
    ],
    'env': {
        'es6': true
    },
    'ecmaFeatures': {
        'modules': true,
    },
    'rules': {
        // Use the short syntax for arrow functions where it's readable
        // (no convention)
        'arrow-body-style': 0,

        // Require parens in arrow function arguments
        'arrow-parens': 2,

        // Require space before/after arrow function's arrow
        'arrow-spacing': [2, {
            'before': true,
            'after': true
        }],

        // Verify calls of super() in constructors
        'constructor-super': 2,

        // Do not enforce spacing after the * in generator functions
        // because of https://github.com/eslint/eslint/issues/6274
        'generator-star-spacing': 0,

        // Restrict file extensions that may be required
        'import/extensions': [2, { 'js': 'never' }],

        // Enforce convention in module import order
        'import/order': [2, {
            'groups': [
                ['builtin', 'external'],
                ['internal', 'parent', 'index', 'sibling']
            ],
            'newlines-between': 'always'
        }],

        // Disallow modifying variables of class declarations
        'no-class-assign': 2,

        // Disallow arrow functions where they could be confused with comparisons
        'no-confusing-arrow': [2, { 'allowParens': false }],

        // Disallow modifying variables that are declared using const
        'no-const-assign': 2,

        // Disallow duplicate name in class members
        'no-dupe-class-members': 2,

        // Disallow duplicate imports
        'no-duplicate-imports': [2, { 'includeExports': true }],

        // Disallow symbol constructor
        'no-new-symbol': 2,

        // Disallow specific imports
        'no-restricted-imports': [2, 'console.json'],

        // Disallow use of this/super before calling super() in constructors
        'no-this-before-super': 2,

        // Disallow unnecessary computed property keys on objects
        'no-useless-computed-key': 2,

        // Disallow unnecessary constructor
        'no-useless-constructor': 2,

        // Disallow renaming import, export, and destructured assignments to the same name
        'no-useless-rename': [2, {
            'ignoreImport': false,
            'ignoreExport': false,
            'ignoreDestructuring': false
        }],

        // Require let or const instead of var
        'no-var': 2,

        // Require Object Literal Shorthand Syntax
        'object-shorthand': [2, 'always'],

        // Suggest using arrow functions as callbacks
        'prefer-arrow-callback': [2, {
            'allowNamedFunctions': false,
            'allowUnboundThis': true
        }],

        // Suggest to use const declaration for variables
        // that are never modified after declared.
        'prefer-const': [2, {
            'destructuring': 'any',
            'ignoreReadBeforeAssign': false
        }],

        // Suggest using reflect methods where applicable
        'prefer-reflect': 2,

        // Suggest using the rest parameters instead of arguments
        'prefer-rest-params': 2,

        // Suggest using the spread operator instead of .apply()
        'prefer-spread': 2,

        // Suggest using template literals instead of string concatenation.
        'prefer-template': 2,

        // Disallow generator functions that do not have yield
        'require-yield': 2,

        // Enforce spacing between rest and spread operators and their expressions
        'rest-spread-spacing': [2, 'never'],

        // Import sorting, not usable for us because of a different sort method
        // See https://github.com/infektweb/conventions/blob/master/docs/javascript.md
        'sort-imports': 0,

        // Disallow usage of spacing in template strings
        'template-curly-spacing': [2, 'never'],

        // Enforce spacing after the * in yield* expressions
        'yield-star-spacing': [2, 'after']
    }
};
