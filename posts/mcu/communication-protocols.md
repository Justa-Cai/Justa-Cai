---
layout: post
title: "MCU常用通信协议详解"
date: 2024-03-20
category: MCU开发
tags: [通信协议, UART, SPI, I2C]
---

# MCU常用通信协议详解

## UART通信
```c
// UART初始化示例
void UART_Init(void)
{
    huart1.Instance = USART1;
    huart1.Init.BaudRate = 115200;
    huart1.Init.WordLength = UART_WORDLENGTH_8B;
    huart1.Init.StopBits = UART_STOPBITS_1;
    huart1.Init.Parity = UART_PARITY_NONE;
    HAL_UART_Init(&huart1);
}

// 数据发送示例
void UART_SendData(void)
{
    uint8_t data[] = "Hello World\r\n";
    HAL_UART_Transmit(&huart1, data, sizeof(data), 100);
}
```

## I2C通信
1. 主机模式编程
2. 从机模式编程
3. 常见传感器通信实例

## SPI通信
1. 基本配置
2. DMA传输
3. 常见外设通信示例 