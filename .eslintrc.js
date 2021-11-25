/**
** 
**/
module.exports = {

	/**
	** Extends.
	**/
	extends: [

		'@nuxtjs',
		'plugin:nuxt/recommended',
		'prettier',

	],

	/**
	** Take the current directory as the root 
	** directory and no longer look up .eslintrc.js
	** @see https://eslint.org/docs/user-guide/configuring/configuration-files#using-configuration-files
	**/
	root: true,

	/**
	** Environment.
	**/
	env: {

		browser: true,
		node: true,

	},

	/**
	** Parser options.
	**/
	parserOptions: {

		parser: '@babel/eslint-parser',
		requireConfigFile: false,

	},

	/**
	** Plugins.
	**/
	plugins: [],

	/**
	** Add your custom rules here.
	** @see https://eslint.org/docs/rules/
	** @see https://eslint.vuejs.org/rules/
	**/
	rules: {

		/**
		** Enforce consistent indentation.
		** @see https://eslint.org/docs/rules/indent
		**/
		'indent': [ 'error', 'tab', { 'SwitchCase': 1 } ],

		/**
		** Disallow all tabs.
		** @see https://eslint.org/docs/rules/no-tabs
		**/
		'no-tabs': [ 'warn', { 'allowIndentationTabs': true } ],

		/**
		** Disallow or enforce spaces inside of parentheses.
		** @see https://eslint.org/docs/rules/space-in-parens
		**/
		'space-in-parens': [ 'error', 'always', { 'exceptions': [ 'empty' ] } ],
		// 'space-in-parens': [ 'error', 'always', { 'exceptions': [ 'empty', '{}', '[]' ] } ],

		/**
		** Require Following Curly Brace Conventions.
		** @see https://eslint.org/docs/rules/arrow-parens#require-parens-in-arrow-function-arguments-arrow-parens
		**/
		'arrow-parens': [ 'error', 'as-needed', { 'requireForBlockBody': false } ],

		/**
		** Disallow or enforce spaces inside of brackets.
		** @see https://eslint.org/docs/rules/array-bracket-spacing
		**/
		'array-bracket-spacing': [ 'error', 'always' ],

		/**
		** Enforce consistent spacing inside braces.
		** @see https://eslint.org/docs/rules/object-curly-spacing
		**/
		'object-curly-spacing': [ 'error', 'always' ],

		/**
		** Enforce Usage of Spacing in Template Strings.
		** @see https://eslint.org/docs/rules/template-curly-spacing
		**/
		'template-curly-spacing': [ 'warn', 'always' ],

		/**
		** Enforces spacing around commas.
		** @see https://eslint.org/docs/rules/comma-spacing
		**/
		'comma-spacing': [ 'error', { 'before': false, 'after': true } ],

		/**
		** Require Following Curly Brace Conventions.
		** @see https://eslint.org/docs/rules/curly#require-following-curly-brace-conventions-curly
		**/
		'curly': [ 'error' ],

		/**
		** Require or disallow padding within blocks.
		** @see https://eslint.org/docs/rules/padded-blocks
		**/
		'padded-blocks': [ 'warn', 'always', { 'allowSingleLineBlocks': true } ],

		/**
		** Require or disallow semicolons instead of ASI.
		** @see https://eslint.org/docs/rules/semi
		**/
		'semi': [ 'error', 'always', { 'omitLastInOneLineBlock': true } ],

		/**
		** Require or disallow trailing commas.
		** @see https://eslint.org/docs/rules/comma-dangle
		**/		
		'comma-dangle': [ 'error', 'only-multiline' ], // allows
		// 'comma-dangle': [ 'error', 'always-multiline' ], // requires
		// 'comma-dangle': [ 'error', { 
		// 	'arrays': 'only-multiline',
		// 	'objects': 'only-multiline' 
		// } ], // mixed

		/**
		** Require or disallow trailing commas.
		** @see https://eslint.org/docs/rules/no-multiple-empty-lines
		**/
		'no-multiple-empty-lines': [ 'error', { 'max': 2, 'maxBOF': 0, 'maxEOF': 0 } ],

		/**
		** Disallow or enforce spaces inside of computed properties.
		** @see https://eslint.org/docs/rules/computed-property-spacing
		**/
		'computed-property-spacing': [ 'warn', 'always' ],

		/**
		** Disallow Unused Variables.
		** @see https://eslint.org/docs/rules/no-unused-vars#disallow-unused-variables-no-unused-vars
		**/
		'no-unused-vars': [ 'warn', { 'args': 'none', 'ignoreRestSiblings': true, 'caughtErrors': 'all' } ],

		/**
		** Require or disallow a space before tag's closing brackets.
		** @see https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html
		**/
		'vue/html-closing-bracket-spacing': [ 'error', {

			'startTag': 'never',
			'endTag': 'never',
			'selfClosingTag': 'always',

		} ],

		/**
		** Enforce consistent indentation in <template>.
		** @see https://eslint.vuejs.org/rules/html-indent.html
		**/
		'vue/html-indent': [ 'error', 'tab', {

			'attribute': 1,
			'baseIndent': 1,
			'closeBracket': 0,
			'alignAttributesVertically': true,
			'ignores': [],

		} ],

		/**
		** Require a line break before and after the contents of a multiline element.
		** @see https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html
		**/
		'vue/multiline-html-element-content-newline': [ 'warn', {

			'ignoreWhenEmpty': true,
			// 'ignores': [ 'pre', 'textarea', ...INLINE_ELEMENTS ],
			'ignores': [ 'pre', 'code', 'textarea' ],
			'allowEmptyLines': true,

		} ],

		/**
		** Enforce self-closing style.
		** @see https://eslint.vuejs.org/rules/html-self-closing.html
		**/
		'vue/html-self-closing': [ 'warn', {

			'html': {

				'void': 'never',
				'normal': 'always',
				'component': 'any',

			},

			'svg': 'any',
			'math': 'always',

		} ],

		/**
		** Require default value for props.
		** @see https://eslint.vuejs.org/rules/require-default-prop.html
		**/
		// 'vue/require-default-prop'

	},

};