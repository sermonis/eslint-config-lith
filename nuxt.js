/**
** 
**/
'use strict';

// TODO:
// https://github.com/wikimedia/eslint-config-wikimedia

/**
** 
**/
module.exports = {

	/**
	** Root.
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
	** Allows us to lint the <template> of .vue files.
	** @see https://github.com/vuejs/vue-eslint-parser
	**/
	parser: 'vue-eslint-parser',

	/**
	** Options has the same properties as what espree.
	** @see https://github.com/mysticatea/vue-eslint-parser#-options
	**/
	parserOptions: {

		/**
		** Set the js parser to @babel/eslint-parser.
		** @see https://github.com/vuejs/vue-eslint-parser#parseroptionsparser
		**/
		'parser': '@babel/eslint-parser',
		
		/**
		** ECMAScript modules mode.
		** @see 
		**/
		'sourceType': 'module',
       
		/**
		** 
		**/
		'ecmaVersion': 2019,
       
		/**
		** 
		**/
		'ecmaFeatures': {
            
			/**
			** The return statement is not allowed 
			** to appear in the global environment.
			**/
			'globalReturn': false,
            
			/**
			** Turn on global script mode.
			**/
			'impliedStrict': true,
            
			/**
			** 
			**/
			'jsx': false,
        
		},

		/**
		** Even if there is no babelrc configuration file, 
		** use @babel/eslint-parser to parse.
		**/
		requireConfigFile: false,

		/**
		** Only allow import and export statements 
		** to appear at the top level of the module.
		**/	
		allowImportExportEverywhere: false,

	},

	/**
	** Extends.
	**/
	extends: [

		'@nuxtjs',
		'plugin:nuxt/recommended',
		'prettier',

	],

	/**
	** Plugins.
	**/
	plugins: [ 'vue' ],

	/**
	** Add your custom rules here.
	** @see https://eslint.vuejs.org/rules/
	**/
	rules: {

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

		/**
		** Disable template errors regarding invalid end tags.
		** @see https://eslint.vuejs.org/rules/no-parsing-error.html#vue-no-parsing-error
		**/
		// 'vue/no-parsing-error': [ 'error', {
			
		// 	'x-invalid-end-tag': false,
		
		// } ],

		/**
		** Maximum 5 attributes per line instead of one.
		** @see https://eslint.vuejs.org/rules/max-attributes-per-line.html#vue-max-attributes-per-line
		**/
		// 'vue/max-attributes-per-line': [ 'error', {
			
		// 	singleline: 5,
		
		// } ],

	},

};