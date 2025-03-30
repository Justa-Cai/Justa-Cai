---
layout: post
title: "音频编解码实践"
date: 2024-03-20
category: 音视频开发
tags: [音频, 编解码, AAC, MP3]
---

# 音频编解码实践

## AAC编解码
```c
// AAC编码器初始化
static void init_aac_encoder() {
    AVCodec *codec = avcodec_find_encoder(AV_CODEC_ID_AAC);
    AVCodecContext *c = avcodec_alloc_context3(codec);
    
    c->bit_rate = 128000;
    c->sample_fmt = AV_SAMPLE_FMT_FLTP;
    c->sample_rate = 44100;
    c->channel_layout = AV_CH_LAYOUT_STEREO;
    c->channels = 2;
}
```

## 音频重采样
1. libswresample使用
2. 采样率转换
3. 声道转换

## 实战案例
1. 音频录制
2. 实时音频处理
3. 音频特效处理 