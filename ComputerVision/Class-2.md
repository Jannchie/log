**Image Processing**

We can use a 3D array to represent a RGB image. Two of the dimensions are used to represent the coordinate position of the pixel, and the third dimension has three elements, which respectively represent the brightness value of the three primary colors of the pixel. 

According to the **camera obscura effect**, we can map the objects in three-dimensional space to two-dimensional images. This makes objects closer to the lens look bigger and objects farther away look smaller. The object infinity far from lens will disappear at points called **vanishing points**. This effect called **perspective**.

In order to be able to perform image and geometric processing in the **projection space**, we need to use **homogeneous coordinates**. Homogeneous coordinate systems use n+1 dimensional vectors to describe n-dimensional Spaces. The extra dimension is used for scaling.

A homogeneous coordinate vector $\tilde{x}$ can be transformed into an inhomogeneous coordinate vector $x$：

$$
\tilde{x} =
\left [
\begin{matrix}
\tilde{x} \\ \tilde{y} \\ \tilde{w}
\end{matrix}
\right ]
= \tilde{w}
\left [
\begin{matrix}
x\\y\\1
\end{matrix}
\right ]
= \tilde{w}\bar{x}
$$

In cartesian coordinate system, 2D translation is $\bm{x'} =  \bm R\bm{x} + \bm{t}$, but in Homogeneous coordinate system, 2D translation is $
\bm{x'} =  
\left [
\begin{matrix}
\bm{R} & \bm{t}
\end{matrix}
\right ]
\tilde{x}
$ where $\bm R$ is an orthonormal rotation matrix with $\bm R\bm R^T = \bm I$ and $|\bm R| = 1$. If $\bm R$ is identity matrix, there is no rotation in this transformation. This kind of transformation that the shape not changes called **similarity transform.**

The formula for 2D affine transformation is $\bm{x'} = \bm A \tilde{x}$ where $\bm A$ is an arbitrary $2 \times 3$ matrix. Under affine transformation, the parallel lines will remain parallel. The formula for 2D projective transformation is $\bm{\tilde x'} = \bm {\tilde{H}} \tilde{x}$ where $\bm {\tilde{H}}$ is an arbitrary $3 \times 3$ matrix. 3D transformation is similar to 2D transformation.

Digital images are collected by sensor arrays, we can use CCD sensors or CMOS sensors. Through the filter, we can get the brightness of different colors of light to produce a color picture. We can use Bayer pattern and demosaicing algorithms to generate colorful images.

Whether it is audio, picture, or video, too low sampling rate will cause aliasing problems. An image can be jagged after transformation, an effect called aliasing. One way to counter aliasing is **bilinear interpolation**.
