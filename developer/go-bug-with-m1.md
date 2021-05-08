---
title: 在 M1 芯片上调试 Golang 项目的深坑
updatedAt: Sat, 08 May 2021 19:43:09 +0900
---

时至今日，M1都出了半年了，但是在 M1 芯片的 Mac 上进行 Golang 断点调试仍然有 Bug。

如果使用 VSCode，进行断点调试时会直接报出红字退出，而使用 GoLand 开发会直接卡在断点处，无法进入断点。

![VSCode 下断点调试](https://i.loli.net/2021/05/08/Ac4pdUySLT3jYDW.png)

这是升级了 Mac 系统到11.3而导致的。在 Github 相关仓库的 Issue 页面中找到了下面相关开发者的问题描述：

> I was caused by upgrading 11.3. After adding the code as shown in the figure to the dlv source code, dlv continued to work for me. [(Issue #2436)](https://github.com/go-delve/delve/issues/2436#issuecomment-828090158)

---

这个问题的解决方案已经被合并进了仓库。但是目前最新发布的版本不包含修复补丁。我们需要克隆仓库安装 master 分支上的最新版本。

```zsh
git clone https://github.com/go-delve/delve
cd delve
go install github.com/go-delve/delve/cmd/dlv
```

安装最新版后，在 VSCode 中就可以调试了。但是在 Goland 中，问题依然存在。

这是因为 Goland 使用了自带的 dlv，而不是本地安装目录下的 dlv。我们需要覆盖本地 Go 目录中的 dlv 到 GoLand 的 dlv。

```zsh
cp /Users/$USER/go/bin/dlv /Applications/GoLand.app/Contents/plugins/go/lib/dlv/macarm/dlv
```
