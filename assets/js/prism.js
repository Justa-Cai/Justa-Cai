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

// 不要手动初始化行号插件，因为prism-line-numbers.min.js已经提供了初始化功能
// Prism.plugins.lineNumbers.init(); // 移除这行代码，它导致了错误

// 确保行号插件在GitHub Pages环境中正确工作
document.addEventListener('DOMContentLoaded', function() {
    // 调试信息
    console.log('自定义Prism.js初始化开始');

    try {
        // 确保Prism对象存在
        if (typeof Prism === 'undefined') {
            console.error('Prism未加载');
            return;
        }

        // 定义行号逻辑
        if (!Prism.plugins) {
            Prism.plugins = {};
        }

        // 手动添加行号
        function addLineNumbers() {
            // 所有具有line-numbers类的pre元素
            var pre = document.querySelectorAll('pre.line-numbers');
            
            pre.forEach(function(element) {
                // 确保pre里有code元素
                var code = element.querySelector('code');
                if (!code) return;
                
                // 如果已经有行号行了，就不再添加
                if (element.querySelector('.line-numbers-rows')) return;
                
                // 生成正确的行数
                var linesNum = code.textContent.split('\n').length;
                var lineNumbersWrapper = document.createElement('span');
                lineNumbersWrapper.className = 'line-numbers-rows';
                
                // 创建每一行的行号
                var lines = '';
                for (var i = 0; i < linesNum; i++) {
                    lines += '<span></span>';
                }
                
                lineNumbersWrapper.innerHTML = lines;
                
                // 将行号添加到pre元素
                element.appendChild(lineNumbersWrapper);
            });
        }

        // 添加语法高亮
        Prism.highlightAll();
        
        // 添加行号
        addLineNumbers();
        
        // 确保每次内容变化时重新应用行号
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList') {
                    addLineNumbers();
                }
            });
        });
        
        // 观察pre.line-numbers元素的变化
        document.querySelectorAll('pre.line-numbers').forEach(function(pre) {
            observer.observe(pre, { childList: true });
        });
        
        console.log('自定义Prism.js初始化完成');
    } catch (e) {
        console.error('Prism.js初始化出错:', e);
    }
});