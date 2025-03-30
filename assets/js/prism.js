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

// 简单的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 确保所有pre标签都有line-numbers类
    document.querySelectorAll('pre').forEach(function(pre) {
        if (!pre.classList.contains('line-numbers')) {
            pre.classList.add('line-numbers');
        }
    });
    
    // 确保Prism已加载
    if (typeof Prism !== 'undefined') {
        console.log('Prism初始化');
        // 让Prism内置的行号插件自动工作
    }
});