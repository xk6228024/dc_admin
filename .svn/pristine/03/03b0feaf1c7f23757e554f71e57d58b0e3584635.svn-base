module.exports = {
    // 此项是用来告诉eslint找当前配置文件不能往父级查找
    root: true,
    env: {
        // 此项指定环境的全局变量，下面的配置指定为node环境
        node: true
    },
    // 此项是用来配置vue.js风格
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    // 规则配置写在这里
    rules: {
        // "off"或者0，关闭规则
        // "warn"或者1，打开规则出现问题会有警告
        // "error"或者2，打开规则出现问题会报错

        // 生产环境禁止使用debugger
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 缩进风格
        'indent': [2, 4],
        // 箭头函数用小括号括起来
        'arrow-parens': 0,
        // 字符串使用单引号
        'quotes': [
            'error',
            'single'
        ],
        // 禁止混用tab和空格
        'no-mixed-spaces-and-tabs': [0, false]

    },
    // 此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
    parserOptions: {
        parser: 'babel-eslint'
    }
}
