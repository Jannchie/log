---
title: Guided Filter
tags: CV
updatedAt: Wed, 02 Jun 2021 12:50:39 +0900
lang: en-US
---

Simple linear translation-invariant(LTI), such as box filter or Gaussian filter, have some problems. These filters erase a lot of detail while eliminating noise, and the edge detail in the image is also reduced.

Therefore, a filter that can maintain edge information, such as **Bilateral Filter**, is proposed. Bilateral Filter has several disadvantages: first, due to the storage of too much high-frequency information, it has a poor processing effect on high-frequency noise in color images. Second, its calculation is more complex, the algorithm speed is slow. When not optimized, the time complexity is $O(Nr^2)$, and all algorithms optimized for efficiency will result in poor output quality. Third, it is not stable enough, and there may be undesirable gradient reverses.

**Guided filter** is a new filter. It inherits the advantages of bilateral filter, which is also a non-iterative edge-preserving filter. Moreover, it is very fast, reaching $O(N)$, and the result is non-approximate. We can use any size arbitrary kernel in our applications. Finally, the guided filter can preserve the edges and the gradient, thus avoiding gradient reversal.

In addition, guided filter can also be used in a series of scenarios such as feathering, Detail Enhancement, HDR Compression and dehazing.

---

The Guided filter requires a guide image in addition to an input image. A Guide image can be either a different image or an input image. When the guide image is the input image itself, the guide filter is an edge-perserving filter:

$$
q_i = \sum_j{W_{ij}(I)p_j}
$$

where $q$is the output image, $p$ is the input image, $I$ is the guide image, $I$, $j$ is the pixel coordinate, and $W$ is the function only related to the guide image.

An important assumption of the Guided Filter is that the output image $q$ can be regarded as a local linear transformation of the guide image $I$:

$$
q_i = a_kI_i + b_k, \forall i \in \omega _k
$$

where $a_k$, $b_k$ are constant term coefficients,$w k$is the localized window, and k is the center point of the window.

That is to say, a complex function can be expressed by many local linear functions when a point on the function is linearly related to the points in its neighboring parts. When the value of a point on the function is required, the value of all linear functions containing the point can be calculated and averaged.

In addition, we consider the output image to be composed of the input image minus noise or texture:

$$
q_i =  p_i - n_i
$$

Therefore, we only need linear regression to find the coefficient, that is, to minimize the difference between the output value of the fitting function $q$ and the real value $p$, which can be transformed into an optimization problem, we can use the linear ridge regression model, that is, to minimize the following equation:

$$
E(a_k,b_k) = \sum_i\in \omega _k ((a_kI_i + b_k - p_i)^2 + \epsilon a_k^2)
$$

Where $\epsilon$ is a regularization parameter. When the window size is constant, the filtering effect becomes more obvious with the increase of $\epsilon$.

The above equation is solved to obtain the local values of $a$ and $b$. The average value of each pixel point in each window is the output pixel value:

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

The Guided Filter inherits the benefits of Bilateral Filtering, including preserving edges during the smoothing process and being non-iterative. It also solves the computational complexity and gradient deformation problems of Bilateral Filtering.

The Guided Filter better preserves the gradient information in the image. Because in the base layer, there is $\nabla q \approx \bar a \nabla I$ near the edge. In the laminated layer, the shape of the edges is well maintained. Bilateral Filtering, on the other hand, fluctuates in detail because the pixels around them have few similar colors, making the Gaussian-weighted average data sparse and unreliable.

The Guided Filter has its limitation. The Guided Filter does not apply directly to sparse inputs such as strokes because it relies on local operators. It is the same as other explicit filters and may have a halo near certain edges.

The reason for this problem is that it is difficult to determine where an edge is. It depends on context.

---

The algorithm can speed things up even further. It's called the Fast Guided Filter. It is fast mainly because of the idea of image pyramids. Here are the steps:

First, the guided image I and the input image $P$ are sampled by $1/s$ down to obtain $I'$, $P'$. Then use $I'$ and $P'$ to calculate the coefficients $a$ and $b$, and calculate the output image $Q'$. $Q'$ is upsampled by $s$ times to get the final output image $Q$.

Because the calculation part is the downsampled image, the computation amount will be greatly reduced, and no obvious distortion will be introduced.
