---
layout: post
title: "自定义 View 实践总结"
date: 2024-03-30
categories: Android
tags: [Android, View, 自定义View]
---

# 自定义 View 实践总结

## 引言

在 Android 开发中，自定义 View 是一个非常重要的技能。本文将总结自定义 View 的关键知识点和实践经验。

## 自定义 View 的基本步骤

### 1. 继承 View 类
```java
public class CustomView extends View {
    public CustomView(Context context) {
        super(context);
        init();
    }

    public CustomView(Context context, AttributeSet attrs) {
        super(context, attrs);
        init();
    }

    private void init() {
        // 初始化画笔、动画等
    }
}
```

### 2. 重写关键方法
```java
@Override
protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
    // 测量 View 的大小
}

@Override
protected void onDraw(Canvas canvas) {
    // 绘制 View 的内容
}

@Override
protected void onLayout(boolean changed, int left, int top, int right, int bottom) {
    // 布局子 View
}
```

## 实践要点

### 1. 测量（Measure）
- 理解 MeasureSpec
- 处理 wrap_content 和 match_parent
- 考虑 padding 和 margin

### 2. 绘制（Draw）
- 使用 Canvas 绘制基本图形
- 处理触摸事件
- 实现动画效果

### 3. 性能优化
- 避免在 onDraw 中创建对象
- 使用硬件加速
- 合理使用缓存

## 常见问题与解决方案

### 1. 内存泄漏
- 及时释放资源
- 使用弱引用
- 在 onDetachedFromWindow 中清理

### 2. 性能问题
- 使用 ViewStub 延迟加载
- 合理使用 requestLayout
- 避免过度绘制

## 最佳实践

1. 遵循单一职责原则
2. 提供自定义属性
3. 支持动画效果
4. 处理触摸事件
5. 考虑适配性

## 示例代码

```java
public class CustomProgressBar extends View {
    private Paint paint;
    private int progress;
    
    public CustomProgressBar(Context context) {
        super(context);
        init();
    }
    
    private void init() {
        paint = new Paint();
        paint.setAntiAlias(true);
        paint.setStyle(Paint.Style.STROKE);
        paint.setStrokeWidth(10);
        paint.setColor(Color.BLUE);
    }
    
    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        // 绘制进度条
        canvas.drawArc(0, 0, getWidth(), getHeight(), 
            0, progress * 360 / 100, false, paint);
    }
    
    public void setProgress(int progress) {
        this.progress = progress;
        invalidate();
    }
}
```

## 总结

自定义 View 是 Android 开发中的重要技能，需要深入理解 View 的生命周期和绘制机制。通过合理的实践和优化，可以创建出高效、美观的自定义 View。

## 参考资料
1. Android 官方文档
2. 《Android 开发艺术探索》
3. Android 源码 