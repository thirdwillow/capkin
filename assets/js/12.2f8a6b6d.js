(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{424:function(t,a,e){"use strict";e.r(a);var r=e(1),v=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"一、基本介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、基本介绍"}},[t._v("#")]),t._v(" 一、基本介绍")]),t._v(" "),a("p",[t._v("Java BIO 就是传统的 java io  编程，其相关的类和接口在 java.io")]),t._v(" "),a("p",[t._v("BIO(blocking I/O) ： 同步阻塞，服务器实现模式为一个连接一个线程，即客户端有连接请求时服务器端就需要启\n动一个线程进行处理，如果这个连接不做任何事情会造成不必要的线程开销，可以通过线程池机制改善(实现多个客户连接服务器).")]),t._v(" "),a("h1",{attrs:{id:"二、工作机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、工作机制"}},[t._v("#")]),t._v(" 二、工作机制")]),t._v(" "),a("p",[t._v("对 BIO  编程流程的梳理")]),t._v(" "),a("ol",[a("li",[t._v("服务器端启动一个 ServerSocket，注册端口，调用accpet方法监听客户端的Socket连接。")]),t._v(" "),a("li",[t._v("客户端启动 Socket对服务器进行通信，默认情况下服务器端需要对每个客户 建立一个线程与之通讯。")])]),t._v(" "),a("h1",{attrs:{id:"三、回顾"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、回顾"}},[t._v("#")]),t._v(" 三、回顾")]),t._v(" "),a("p",[t._v("网络编程的基本模型是Client/Server模型，也就是两个进程之间进行相互通信，其中服务端提供位置信（绑定IP地址和端口），客户端通过连接操作向服务端监听的端口地址发起连接请求，基于TCP协议下进行三次握手连接，连接成功后，双方通过网络套接字（Socket）进行通信。")]),t._v(" "),a("p",[t._v("传统的同步阻塞模型开发中，服务端ServerSocket负责绑定IP地址，启动监听端口；客户端Socket负责发起连接操作。连接成功后，双方通过输入和输出流进行同步阻塞式通信。 基于BIO模式下的通信，客户端 - 服务端是完全同步，完全耦合的。")])])}),[],!1,null,null,null);a.default=v.exports}}]);