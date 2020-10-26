---
category: Components
subtitle: socket机制
type: 公共方法API
title: Websocket
order: 1
---

websocket 请求，经整晚测试，重连机制状况良好，待压力测试。

## 何时使用

- 大数据量。
- 对数据实时性有要求的部分。
- 大数据量如 socket 数据可通过发布订阅进行数据传递。

## API

如何引用？

```
socket提供一系列的API，具体详细API请看[协议配置]

使用方法:
import { Websocket } from 'ss-ui-library'

// 以okex交易所ws作为演示案例
const socket = new Websocket({
    url: 'wss://real.okex.com:8443/ws/v3'
})

// 默认心跳请求为`ping`,可以自定义
const socket = new Websocket({
    heartBeatMsg: 'I am test heartbeat request'
})

常用API：

/*--发送--*/
socket.sendMsg(params)

/*--socket开启回调--*/
socket.openCallback(res)

/*--socket接收到返回数据的回调--*/
socket.messageCallback(res)

/*--socket关闭的回调--*/
socket.closeCallback(res)

/*--socket发生错误的回调--*/
socket.errorCallback(res)

常用主动执行方法：

/**
* 手动关闭socket
*/
socket.close(res)

/*
* 有手动关闭，就必须有手动开启；
* 手动开启，即直接进行发送执行socket.sendMsg(params)
*/

常用检测机制:

/**
* 检查socket是否已经关闭
* @return {Boolean} 是否已经关闭
*/
socket.isSocketClose()

/**
* 检查socket是否正在关闭
* @return {Boolean} 是否正在关闭
*/
socket.isSocketClosing()

/**
* 检查socket是否连接成功
* @return {Boolean} 是否建立连接成功
*/
socket.isSocketOpen()
```
