---
layout: post
title: "Linux 驱动开发入门"
date: 2024-03-20
category: 嵌入式Linux
tags: [驱动开发, 内核编程]
---

# Linux 驱动开发入门

## 开发环境搭建
1. 内核源码准备
2. 交叉编译工具链配置
3. 开发板环境准备

## 字符设备驱动示例
```c
#include <linux/module.h>
#include <linux/kernel.h>
#include <linux/fs.h>

static int __init hello_init(void)
{
    printk(KERN_INFO "Hello, Driver!\n");
    return 0;
}

static void __exit hello_exit(void)
{
    printk(KERN_INFO "Goodbye, Driver!\n");
}

module_init(hello_init);
module_exit(hello_exit);
```

## 驱动调试方法
1. printk 打印
2. debugfs 使用
3. 使用 JTAG 调试 