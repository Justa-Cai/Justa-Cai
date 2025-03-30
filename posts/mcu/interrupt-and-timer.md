---
layout: post
title: "MCU中断处理与定时器应用"
date: 2024-03-20
category: MCU开发
tags: [中断, 定时器, 实时性]
---

# MCU中断处理与定时器应用

## 中断系统配置
```c
// 中断优先级配置
void NVIC_Config(void)
{
    HAL_NVIC_SetPriority(USART1_IRQn, 0, 1);
    HAL_NVIC_EnableIRQ(USART1_IRQn);
}

// 中断服务函数示例
void USART1_IRQHandler(void)
{
    if(__HAL_UART_GET_FLAG(&huart1, UART_FLAG_RXNE))
    {
        // 处理接收中断
        uint8_t data = (uint8_t)(huart1.Instance->DR & 0xFF);
        // 数据处理
    }
}
```

## 定时器应用
1. 基本定时器配置
2. PWM输出
3. 输入捕获 