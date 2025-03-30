// Prism.js 核心功能
Prism.languages.extend('markup', {
    'script': {
        pattern: /(<script[^>]*>)[\s\S]*?(?=<\/script>)/i,
        lookbehind: true,
        inside: {
            'rest': Prism.languages.javascript
        }
    }
});

Prism.languages.extend('markup', {
    'style': {
        pattern: /(<style[^>]*>)[\s\S]*?(?=<\/style>)/i,
        lookbehind: true,
        inside: {
            'rest': Prism.languages.css
        }
    }
});

Prism.languages.extend('markup', {
    'comment': {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        inside: {
            'markupclose': /-->/
        }
    }
});

// 配置行号插件
Prism.plugins.lineNumbers = {
    // 行号样式
    lineNumbers: true,
    // 起始行号
    start: 1,
    // 行号间隔
    step: 1,
    // 行号前缀
    prefix: '',
    // 行号后缀
    suffix: '',
    // 行号容器类名
    lineNumbersClass: 'line-numbers',
    // 行号类名
    lineNumberClass: 'line-number',
    // 调试信息
    debug: true,
    // 行号容器样式
    lineNumbersWrapperClass: 'line-numbers-rows',
    // 行号样式
    lineNumberStyle: {
        color: '#666',
        paddingRight: '0.8em',
        textAlign: 'right'
    }
};

// 添加调试信息
console.log('Prism.js 配置已加载');
console.log('行号插件配置:', Prism.plugins.lineNumbers);

// 手动初始化行号插件
Prism.plugins.lineNumbers.init();