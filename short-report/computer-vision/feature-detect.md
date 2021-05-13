---
title: Features Detect
createdAt: 2021-04-30 17:31:19
updatedAt: Thu, 13 May 2021 18:45:05 +0900
lang: en-US
---

There are two different images that have the same thing on them. If we need to locate the features and align them, there are three step to do it:

- Detect feature points in both images
- Find corresponding pairs
- Use these pairs to align imagess

Before detecting, we should clearly describe a distinctive feature point. We can divide points into three parts: flat, edge and corner. We can use **Harris detector formulation** to detect corners.

First, we should quantify the change in value of a window movement, we use **self-correlation** function:

$$
E(u,v) = \sum_{x,y}{w(x,y)[I(x+u,y+v)-I(x,y)]^2}
$$

where $w$ is window function, $I(x+u,y+v)$ is shifted intensity, $I(x,y)$ is intensity. It can be approximated by **taylor expansion**:

$$
E(u,v) \approx \left[\begin{matrix}  
   u  & v
\end{matrix}\right]
M
\left[
\begin{matrix}
  u \\ v
\end{matrix}
\right]
$$

where $M$ is a $2 \times 2$ matrix computed from image derivatives:

$$
M = \sum_{x,y}{w(x,y)
\left[
\begin{matrix}
  I_x^2 & I_xI_y \\
  I_xI_y & I_y^2
\end{matrix}
\right]
}
$$

We have:

$$
M = P^{-1} \left[
\begin{matrix}
 \lambda_1& 0 \\
 0 & \lambda_2
\end{matrix}
\right]P
$$

We are able to classificate the points by eigenvalues of $M$:

![Classificate](https://i.loli.net/2021/05/12/7VpxKa5eQ28Ybzl.png)

Harris detector is **rotation invariance**, but it is **not invariant to image scale**. Combining Harris corner detection operator with **Gaussian scale-space representation** can effectively solve this problem.

The **SIFT** describes the area around the key point with a feature vector. Given an image, the first step to extract potential points of interest with SIFT is to construct the scale space of the image. The approach we adopted was to use **Laplacian of Gaussian(LoG)** to construct the scale space of the image. LoG also can be used as a blob detector.

If we use LoG to build scale space, the second derivative will cause a lot of computation. To solve this problem, we use **DoG** to approximate the LoG.

In order to achieve the rotation invariance of the SIFT feature. We need to assign key points directions. What we have chosen is to use the **gradient direction histogram** to describe this key point.

In order to further improve the performance of SIFT, we can normalize this vector into a unit vector, so as to achieve the **illumination invariance** of SIFT features and **invariance of affine** changes.
