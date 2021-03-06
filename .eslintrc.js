module.exports = {
	env: {
		browser: true,
	},
	extends: ['airbnb-base', 'prettier'],
	parser: '@babel/eslint-parser',
	parserOptions: {
		sourceType: 'module',
		babelOptions: {
			configFile: './.babelrc',
		},
	},
	plugins: ['@babel', 'import', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		// printWidth rule in prettier is not working
		'max-len': ['error', { code: 120, tabWidth: 2 }],
		'import/extensions': ['error', 'ignorePackages'],
		'no-underscore-dangle': ['error', { allow: ['__MIAAM__'] }],
	},
};
