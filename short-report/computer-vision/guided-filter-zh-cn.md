---
title: 导向图滤波
updatedAt: Wed, 02 Jun 2021 12:50:39 +0900
tags: CV
---

简单的 linear translation-invariant(LTI), 比如 box filter 或者gaussian filter，存在一些问题。这些滤波器在消除噪声的同时抹去了许多细节，图像中的边缘细节也会被减弱。

因此我们提出了能够保持边缘信息的滤波器，比如 bilateral filter。Bilateral filter 有一些缺点：第一，由于保存了过多的高频信息，对于彩色图像里的高频噪声处理效果不佳。第二，它的计算比较复杂，算法速度较慢。未经过优化时，时间复杂度是$O(Nr^2)$，而所有优化效率的算法都会导致输出质量下降。第三，它不够稳定，有可能会出现不希望的 gradient reversal。

而 guided filter 是一种新的 filter。它继承了 bilateral filter 的优点，它也是一种 non-iterative 的 edge-preserving filter。此外，它的速度很快，达到了 $O(N)$，并且这个结果是非近似的。最后， guided filter 能够保存边缘的同时保留梯度，避免了 gradient reversal。

此外，guided filter 也可以用于 feathering、Detail Enhancement、HDR Compression、dehazing 等一系列场景。

---

Guided filter 除了一个输入图片之外，还需要一个 guide image。Guide image 可以是一副其他的图像，也可以是输入图像。当 guide image 是输入图片本身时，guide filter 就是一个 edge-perserving filter。

Guided filter 的一般形式是这样的：

$$
q_i = \sum_j{W_{ij}(I)p_j}
$$

其中 $q$ 是输出图像，$p$ 是输入图像，$I$ 是 guide image, $i$, $j$ 是像素坐标，$W$ 是仅与 guide image 相关的函数。

Guided filter 的一个重要假设是：输出图像 $q$ 可以看成 guide image $I$ 的一个局部线性变换。

$$
q_i = a_kI_i + b_k, \forall i \in \omega _k
$$

其中，$a_k$,$b_k$ 是常数项系数， $w_k$ 是局部化的窗口，k是窗口的中心点。

也就是说，某函数上一点与其邻近部分的点成线性关系，一个复杂的函数就可以用很多局部的线性函数来表示，当需要求该函数上某一点的值时，只需计算所有包含该点的线性函数的值并做平均即可。

另外，我们认为输出的图像是由输入图像减去噪声或者纹理构成的：

$$
q_i =  p_i - n_i
$$

于是我们只需要线性回归求出系数，也就是希望拟合函数的输出值 $q$ 与真实值 $p$ 之间的差距最小，转化为最优化问题，我们可以使用 linear ridge regression model，也就是让下式最小：

$$
E(a_k,b_k) = \sum_i\in \omega _k ((a_kI_i + b_k - p_i)^2 + \epsilon a_k^2)
$$

其中$\epsilon$是一个正则化参数。在窗口大小不变的情况下，随着 $\epsilon$ 的增大，滤波效果越明显。

求解以上方程得到 $a$ 和 $b$ 在局部的值，平均每个像素点在每个窗口的值即为输出的像素值：

$$
\mathbf{a}_{k}=\left(\Sigma_{k}+\epsilon \mathrm{U}\right)^{-1}\left(\frac{1}{|\omega|} \sum_{i \in \omega_{k}} \mathbf{I}_{i} p_{i}-\mu_{k} \bar{p}_{k}\right)
$$

$$
b_{k}=\bar{p}_{k}-\mathbf{a}_{k}^{\mathrm{T}} \mu_{k}
$$

$$
q_{i}=\overline{\mathbf{a}}_{i}^{\mathrm{T}} \mathbf{I}_{i}+\bar{b}_{i}
$$

---

Guided Filter 继承了 Bilateral filtering 的优点，主要包括在平滑过程中保留了边缘，以及非迭代的特征。同时，它解决了 Bilateral filtering 计算复杂以及梯度变形的问题。

Guided Filter 更好地保留了图像中的梯度信息。因为在基本层中，边缘附近有 $\nabla q \approx \bar a \nabla I$。在复合层中，边缘的形状保持得很好。另一方面， Bilateral filtering 在细节波动比较大，这是因为它们周围的像素几乎没有相似的颜色，高斯加权平均数据很少，变得不可靠。

Guided Filter 也不是没有缺点。 Guided Filter 不直接适用于像笔划这样的稀疏输入，因为它依靠局部的算子。它与其他显示滤波器相同，在某些边附近可能有光晕。

导致这一问题的原因是，判断哪里是一条边是比较困难的。它依赖于上下文。

---

这个算法还能够进一步提高速度。叫做 Fast Guided Filter。它之所以快速，主要是因为采用了图像金字塔思想。步骤如下：

首先对引导图像I和输入图像 $P$ 进行 1/s 的降采样，得到 $I'$, $P'$；然后利用 $I'$ 和 $P'$ 计算系数 $a$ 和 $b$，并计算输出图像 $Q'$；
将 $Q'$ 进行 $s$ 倍的上采样得到最终输出图像 $Q$。

由于计算部分是降采样的图像，运算量会大大减小，而不会引入明显的失真。
