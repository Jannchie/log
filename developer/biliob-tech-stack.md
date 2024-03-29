---
title: BiliOB 技术栈简介
updatedAt: 2020-11-16 03:20
---
## 自我介绍

大家好，我是见齐。我正在学习编程。我维护了一个网站，叫做BiliOB观测者，现在这个网站因为某些原因已经关停了。但我觉得现在是一个很好的时机，纯从技术角度，向大家一下这个网站的技术背景。其实虽然我是科班（本科学的是计算机相关）出身，但计算机专业的知识更新迭代实在是太快了。希望那些和我一样，读了几年计算机专业却不知道以后要做什么的人，或者想要学习编程，但是不知道该学些什么的人，看了之后能有一点收获，少走些弯路。我虽然技术不太专精，但是涉猎算是广泛。我觉得我的技术路线可以给大家打个样，作为一个参考。

## 开发环境

### 编程语言

其实编程编程语言很好学。如果你学会了一门语言，那么你你甚至可以在文档的帮助下直接裸写其他语言的项目。就像熟悉windows的人切换到Mac并不困难。因此学习编程语言对于程序员来说不是最关键的问题。我开发BiliOB主要使用了三种语言：Python、Java和JavaScript。Python主要负责的是数据采集，Java则是后端服务器编程，JavaScript则用于前端，也就是客户端编程。这三门语言在这几个领域都是绝对的主流，可以放心学习。

### 软件

编程需要使用很多软件。由于没有什么资金来源，BiliOB的编写是完全建立在免费的软件之上的。

### 编程

我们需要用一种软件来写代码，功能齐全的叫做集成开发工具，简称IDE，功能简单的叫做编辑器。用哪个都可以，当然也可以像我一样，选择混合使用。我推荐的IDE是JetBrain的IDEA社区版，用于Java编程。记住这个JB名号和这风格的图标，认定它目前世界上最好用的IDE，甚至在很多地方超越了vs。而另外一些比较轻量的Python和前端的编程我主要使用的是微软的VSCode。

## 分工

现在学习编程，大致有两个技术栈。一种是前端，专注于客户端编程。一种是后端，专注于服务器编程。有些人两边都会，是个一体机，这种人有个牛逼的称呼，叫做全栈工程师。如果你要一个人建立一个网站，那么你得是一个全栈工程师。

## 前端

### Html、CSS、JS

HTML，CSS和JavaScript是前端必须要了解的。html通过标签语法来控制内容，具体来说就是网页上有哪些文字哪些图片哪些按钮，css控制样式，也就是上述的那些东西以什么形态展现出来，比如字号多大，什么颜色。它们不是什么难以理解的东西，花几分钟时间了解它们就够了。而JavaScript是一个正规的编程语言，只需要掌握语法即可。

### 前端框架

如果放在十年前的话，可能懂上面那些就够了，但现在现代的前端项目已经工程化了。你需要学更多的东西。但要永远记住的是，学习更多的技术不是为了难住你，而是为了更有效率地生产代码。如果没有这些工具，我也不可能凭一己之力完成这么多复杂的功能。

你首先需要花几分钟时间，了解一下诸如Npm、Yarn之类的**包管理工具**的使用方法，只有这样你才能够更科学地站在巨人的肩膀上进行编程。

你还需要在三大前端框架里选一个。三大前端框架分别是Facebook的React、Google的Angular和一个尤姓帅哥领衔编写的Vue。每个框架都有自己的的哲学和生态。React偏向函数式编程，Angular非常面向对象，而Vue有种融合两方优点的意思。我在这个网站中使用的是Vue，当初的理由很简单：它是国人开创的。

这种在很多个框架中选一个的操作，说得帅气一点，叫做技术选型。对于我这种选择困难症，这其实是最难的部分。技术选型还没有结束，在每个框架下还有各自的生态。我其实也走了不少弯路。

Nuxt.js是一个非常好的项目，你可以用它快速生成一个科学的配置好的项目，之后只要往里面填充内容就可以了。甚至在配置项目的时候，它都帮你列出了很多可选项。

Vue下还有很多组件库，你需要选择其中一个。Nuxt.js已经列出了所有主流的组件库，选一个就行了。

我一开始使用的组件库是element。由国产企业饿了么出品。但我对它在移动设备上的展示效果不太满意，我有一大半用户只用手机浏览BiliOB。于是我转向了Vuetify。他遵循谷歌的material design设计风格。安卓就采用了这种风格。

数据的可视化方面，使用了百度的ECharts。使用它的理由是开源免费，配置起来确实比较简单，但其实我个人觉得展示效果挺丑陋的，一直想要换掉，确实也有很多替代的项目。但是没有机会了。

前端部分大概就这些。

## 后端

### Java

后端使用了Java。这是一门大名鼎鼎的编程语言。目前的互联网企业中，阿里用的最多，我强烈建议阅读阿里的Java开发手册，我学到了很多宝贵的实战经验。

### Springboot

我大学时教的Java EE是上古时期的技术，并不适用于如今的前后端分离项目。现在学习Java的话你应该直接从Springboot开始学起。他能简化配置，极大地降低开发门槛。官方文档非常详细，唯一的遗憾是全英文的，你可能需要准备强力的电子词典，比如某道。

## 数据库

后端主要做的事其实很低级，主要就是和数据库打交道。做一些增删改查的操作。以前往往把只会增删改查的程序员称之为码农，现在似乎是个程序员都说自己是码农了。

### MongoDB

我使用的数据库是MongoDB。这个其实还是比较新潮的，它能够按照文档存储数据，无论是开发效率还是读写效率都很高。

目前中文教程中，关于MongoDB的很多信息是滞后的，现如今的MongoDB已经很强大，支持事务，也有了中文全文搜索，建议大家可以玩玩看。

但这其实也有巨坑。BiliOB的宕机基本上都是由于这玩意引起的。MongoDB极度消耗内存，如果服务器的内存太小很容易挂掉。如果资金紧张，建议还是使用传统的MySQL。

在搭建网站的全过程中，数据库是资金开销最大的部分。

### Redis

后端的有些计算是很慢的。比如说计算实时的排名数据。所以很多地方需要加一层缓存，缓存我使用了Redis。在Spring的加持下，缓存配置非常简单。

后端大致就这些。

### 安全框架

本来我使用的Shrio，后来转向了Spring Security。

## Python部分

还有一部分代码是Python写的。

这一块虽然很有意思，但在这里就不展开讲了。有机会我会在别的地方和大家介绍的。

## 运维

写好了代码，我们需要让大家能够访问到。确实应该有一个岗位和这个有关，那就是运维。现在，阿里云腾讯云之类的服务已经非常完善了，他们提供了很好的运维基础设施。最花钱的部分就在这里。

在国内吗，架设一个网站，首先要购买域名，然后通过备案。还需要租赁若干台服务器，来架设所有服务。需要申请一个https证书，来保证网站对的连接安全；需要一个内容分发网络，也就是CDN服务，缓存一些静态的文件，提高全世界用户的访问速度。

我使用的所有服务器都是linux系统的，因为它更加稳定，占用也小，linux的终端也确实比windows更加好用。linux有很多个发行版，这里建议使用ubuntu，稍微人性化一些。

最后，这个网站在运行中，经常需要修改自己的代码，增加新的功能。每次一旦更新，需要测试一下，然后上传到服务器，杀死旧的服务，开启新的服务，这一系列动作其实比较麻烦，我们最好能自动完成它。这套动作叫做持续集成。一开始我使用的是Jenkins，个人觉得有点难用，后来使用的是Travis-CI，也有一些小坑。但其实个人项目根本用不上这些，使用简单的linux终端脚本就能轻松解决了。

## 分析

### Google Analytic

最后，我很喜欢分析数据，通过google analytics，能够看到有多少人在浏览自己的网站，他们又在看些什么。
