module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		// 0:off 1:warn 2:error
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'prefer-const': 'off',
		// js语句结尾是否使用分号
		semi: [0, 'never'],
		// 使用 === 替代 ==, allow-null允许null和undefined使用==
		eqeqeq: [1, 'allow-null'],
		// 强制在注释中 // 或 /* 使用一致的空格
		'spaced-comment': [
			2,
			'always',
			{
				markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
			}
		],
		// 关键字后面使用一致的空格
		'keyword-spacing': [
			0,
			{
				before: true,
				after: true
			}
		],
		// 强制在 function的左括号之前使用一致的空格
		'space-before-function-paren': [0, 'never'],
		// 引号类型
		quotes: [
			1,
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true
			}
		],
		'no-unused-vars': 1,
		// 要求或禁止末尾逗号
		'comma-dangle': [1, 'never'],
		// 严格的检查缩进问题
		indent: [
			1,
			'tab',
			{
				SwitchCase: 1
			}
		],
		//引入模块没有放入顶部
		'import/first': 'off',
		//前面缺少空格，Missing space before
		'arrow-spacing': [
			2,
			{
				before: true,
				after: true
			}
		],
		//后面没有空位，There should be no space after this paren
		'space-in-parens': [1, 'never'],
		//vue模板中已定义但是没有使用，'scope' is defined but never used
		'vue/no-unused-vars': 'off'
	}
};
