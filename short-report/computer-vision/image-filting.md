---
title: Image filtering
createdAt: Sat, 01 May 2021 01:56:03 +0900
updatedAt: Sat, 01 May 2021 01:56:00 +0900
---

There's a lot of noise in the image. In general, noise signals are irrelevant to the object to be studied. It comes in the form of useless information that disrupts the observable information of the image. We should denoise the image under the condition of keeping the detail features of the image as soon as possible. It can help us extract visual features robust to noise to build block of recognition. We can use **filtering** technology to accomplish this step of processing.

Briefly, there are two kinds of filters technologies: **linear filtering** and **non-linear filtering**.

The most basic linear filtering uses **convolution operation**:

$$
J = I \otimes F \\
J(x,y) = \sum^{u_0}_{u=-u_0}\sum^{v_0}_{v=-v_0}{l(x - u, y - v)F(u,v)}
$$

where $J$ is filtered image, $I$ is original image, $F$ is convolution kernel.

Convolution is actually using convolution kernels sliding on the image, the brightness of each pixel in the original image is multiplied by the value of the corresponding and then added all up as resulting pixel value. Convolution operation has two properties; **linearity** and **shift invariance**.

Convolution operation reduces the size of images. There are several ways to pad images to remain size not change. For example, zero fill, mirror fill, clamp fill, etc.

If all of the values in the convolution kernel is zero but the center value is 1, this operation will do nothing. **Box filtering** is a simple blurring operation. All value in the convolution kernel of the box filtering is same, and the sum of them is 1.

Using different convolution kernel we can get different features. If we want to extract the edge of the image, we can use the idea of **n-th order derivatives**. Because the larger the derivative is, the more variable the pixel brightness value is, the more like the edge. We can use **sobel**, **prewitt**, **laplace operator** and so on to extract the edge of the image.

**Gaussian filter** is suitable for eliminating Gaussian noise and is widely used in image processing. **LoG filter** is suitable for contour detecting. **High-pass filtering** is used for sharpening. **Gobor filter bank** is used for feature detecting.

There are some filtering that cannot be expressed by a matrix form because they depend on value in the pixel or the image coordinates. For example, **median filters** sort the value in inspection window and output the midian value. It preserves edges while removing noise. In addition to using the geometric proximity between pixels, the **bilateral filter** also considers the luminosity and color difference between pixels, which makes it can effectively remove the noise on the image and preserve the edge information on the image. **Minimum/maximum filter** leaves the minimum/maximum value in the window.

Besides, There are several related topics help us filtering. We can use **PSNR** to define the amount of noise in the image. We can use **Convolution Theorem** and **Winograd algorithm** to speed up the calculation of convolution.
