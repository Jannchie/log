---
title: Image Features
createdAt: 2021-04-30 17:31:19
updatedAt: 2021-04-30 17:32:22
---

There are two different images that have the same thing on them. If we need to locate the features and align them, there are three step to do it:

- Detect feature points in both images
- Find corresponding pairs
- Use these pairs to align imagess

Before detecting, we should clearly describe a distinctive feature point. We can divide points into three parts: flat, edge and corner. For flat points, there are no change in all directions. For edge points, there are no change along the edge direction. We consider corners as distinctive interest points because they significant change in all directions.

We can use **harris detector formulation** to detect corners:

$$
E(u,v) = \sum_{x,y}{w(x,y)[I(x+u,y+v)-I(x,y)]^2}
$$

where $w$ is window function, $I(x+u,y+v)$ is shifted intensity, $I(x,y)$ is intensity.

This measure of change can be approximated by:

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