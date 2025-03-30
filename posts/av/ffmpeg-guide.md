---
layout: post
title: "FFmpeg开发指南"
date: 2024-03-20
category: 音视频开发
tags: [FFmpeg, 音视频处理]
---

# FFmpeg开发指南

## FFmpeg环境搭建
1. Linux/Windows编译
2. Android平台交叉编译

## 基础API使用
```c
// 初始化FFmpeg
int init_ffmpeg() {
    avformat_network_init();
    av_register_all();  // 注册所有编解码器
}

// 打开媒体文件
int open_input_file(const char *filename) {
    AVFormatContext *fmt_ctx = NULL;
    if (avformat_open_input(&fmt_ctx, filename, NULL, NULL) < 0) {
        return -1;
    }
    // 获取流信息
    avformat_find_stream_info(fmt_ctx, NULL);
}
```

## 常见音视频处理
1. 解封装
2. 解码
3. 转码
4. 混音
5. 视频滤镜 